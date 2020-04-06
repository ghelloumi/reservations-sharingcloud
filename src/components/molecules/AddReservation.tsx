import React from 'react';
import { convertTimeToMinutes } from '../../utils/helpers';
import styled from 'styled-components';

const AddReservationEl = styled.div`
  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    > p {
      padding: 0 2rem;
      font-size: 1.2rem;
    }
    > select {
      margin: 1rem;
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
  }
  > h3 {
  }
`;

const AddReservation: React.FunctionComponent<{ bookingData: any }> = ({
  bookingData,
}) => {
  const arr = bookingData
    .map((e: any) => {
      const arr: number[] = [];
      e.booked.forEach((e: any) =>
        arr.push(convertTimeToMinutes(e.start.h, e.start.m))
      );
      return arr;
    })
    .flat(1);

  const current = convertTimeToMinutes();

  const index = arr.findIndex(
    (number: number) => number >= convertTimeToMinutes()
  );

  const possibleBookingTimes: number[] = [];

  const diff = (index > -1 ? arr[index] : 1440) - current;
  if (diff >= 10 && current > (index > 0 ? arr[index - 1] : 0)) {
    for (let i = 1; i <= diff; i++) {
      !(i % 5) && i >= 10 && possibleBookingTimes.push(i);
    }
  }

  return (
    <AddReservationEl>
      {possibleBookingTimes?.length ? (
        <div>
          <p>Please choose the duration of reservation: </p>
          <select>
            {possibleBookingTimes.map((e: number, i: number) => (
              <option key={i} value={e}>
                {e}
              </option>
            ))}
          </select>
          <button>Validate</button>
        </div>
      ) : (
        <h3>You can not book the room now</h3>
      )}
    </AddReservationEl>
  );
};

export default AddReservation;
