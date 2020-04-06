import React, { useEffect, useState } from 'react';
import { convertTimeToMinutes, getUserToken } from '../../utils/helpers';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addBook } from '../../services/bookings.service';

const AddReservationEl = styled.div`
  > form {
    display: flex;
    align-items: center;
    flex-direction: column;
    > p {
      padding: 0 2rem;
      font-size: 1.2rem;
    }
    > select {
      width: 8rem;
      height: 3rem;
      border: 1px solid #dadada;
      background: #fcfcfc;
      border-radius: 0.5rem;
      font: unset;
      outline: none;
      cursor: pointer;
      padding: 0 1rem;
      > option {
      }
    }
    > button {
      height: 3rem;
      width: 8rem;
      border: 1px solid #dadada;
      background: #fcfcfc;
      border-radius: 0.5rem;
      font: unset;
      outline: none;
      cursor: pointer;
    }

    > input {
      width: 12rem;
      height: 2rem;
      padding: 1rem;
      margin: 1rem;
      border: 1px solid #dadada;
      background: #fcfcfc;
      border-radius: 0.5rem;
      font: unset;
      outline: none;
    }

    > div {
      height: 2rem;
      margin-top: 0.5rem;
      > span {
        color: #f44336;
      }
    }
  }
  > h3 {
  }
`;

const AddReservation: React.FunctionComponent<{
  bookingData: any;
  onAddReservation: any;
}> = ({ bookingData, onAddReservation }) => {
  const [possibleBookingTimes, setPossibleBookingTimes] = useState<number[]>(
    []
  );

  useEffect(() => {
    const possibleBookingTimes: number[] = [];

    const arr = bookingData
      .map((e: any) => {
        const arr: { start: number; end: number }[] = [];

        e.booked.forEach((e: any) =>
          arr.push({
            start: convertTimeToMinutes(e.start.h, e.start.m),
            end: convertTimeToMinutes(e.end.h, e.end.m),
          })
        );
        return arr;
      })
      .flat(1)
      .sort((a: any, b: any) => a.start - b.start);

    const arrStarts = arr.map((e: any) => e.start);
    const arrEnds = arr.map((e: any) => e.end);

    const current = convertTimeToMinutes();
    const index = arrStarts.findIndex(
      (number: number) => number >= convertTimeToMinutes()
    );
    const diff = (index > -1 ? arrStarts[index] : 1440) - current;

    if (diff >= 10 && current > (index > 0 ? arrEnds[index - 1] : 0)) {
      for (let i = 1; i <= diff; i++) {
        !(i % 5) && i >= 10 && possibleBookingTimes.push(i);
      }
    }

    setPossibleBookingTimes(possibleBookingTimes);
  }, [bookingData]);

  const [name, setName] = useState('');
  const [duration, setDuration] = useState(
    possibleBookingTimes?.length ? possibleBookingTimes[0] : 0
  );

  const dispatch = useDispatch();

  const handleAddReservation = () => {
    const userToken = getUserToken();
    const reservationData = {
      name,
      duration,
    };

    dispatch(addBook(userToken, reservationData));

    onAddReservation();
  };

  return (
    <AddReservationEl>
      {possibleBookingTimes?.length ? (
        <form name="form" onSubmit={handleAddReservation}>
          <p>Please choose the duration of reservation: </p>
          <select
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value, 10))}
            required
          >
            <option value="" />
            {possibleBookingTimes.map((e: number, i: number) => (
              <option key={i} value={e}>
                {e}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name..."
            required
          />
          <button>Validate</button>

          <div>
            {name.length < 3 && (
              <span>Name should have at least 3 character0s</span>
            )}
          </div>
        </form>
      ) : (
        <h3>You can not book the room now</h3>
      )}
    </AddReservationEl>
  );
};

export default AddReservation;
