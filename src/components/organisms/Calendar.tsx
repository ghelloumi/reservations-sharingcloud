import React, { useEffect } from 'react';
import moment from 'moment';
import { getUserToken, range } from '../../utils/helpers';
import { BOOKING_HOURS } from '../../utils/constants';
import styled from 'styled-components';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { getResource } from '../../services/resource.service';
import Loader from '../atoms/Loader';
import { IReducer } from '../../redux/_global.interfaces';
import { getBookings } from '../../services/bookings.service';

const CalendarEl = styled.div<{ borderColor: string }>`
  background: #ededed;
  margin: 1rem;
  box-shadow: 0 0 1rem lightgrey;
  flex-direction: row;
  display: flex;
  padding: 0.5rem;
  .users {
    border-top: 1px solid ${(props) => props.borderColor};
    border-bottom: 0;
    > div:first-child {
      height: 4rem;
      ${(props) => props.theme.flexCenter}
      background: #dadada;
      font-weight: 600;
    }

    .user {
      height: 3rem;
      padding: 0 1rem;
      border: 1px solid ${(props) => props.borderColor};
      border-top: 0;
      background: #cccccc;
      ${(props) => props.theme.flexCenter}
    }
  }

  .timeLine {
    width: 100%;
    overflow-x: scroll;
    border-right: 1px solid ${(props) => props.borderColor};
    border-top: 1px solid ${(props) => props.borderColor};
    background: #dadada;
        
    > div {
       width: 100%;
       position: relative;
      .date {
        height: calc(2rem - 1px);
        ${(props) => props.theme.flexCenter}
        font-weight: 600;
      }
      .hours {
        display: flex;

        .hourContainer {
          border: 1px solid ${(props) => props.borderColor};
          width: 100%;
          border-left: 0;
          min-width: 3rem;
          border-bottom: 0;

          &:last-of-type {
            border-right: 0;
          }

          > div {
            ${(props) => props.theme.flexCenter}
            border-bottom: 1px solid ${(props) => props.borderColor};
          }
          .hour {
            height: 2rem;
            background: #cccccc;
          }

          .res {
            height: 3rem;
            background: #f7f7f7;
          }
        }
      }
    }
  }
`;

const CalendarElContainer = styled.div`
  > h2 {
    font-weight: 400;
    > span {
      font-weight: 600;
      padding: 0 1rem;
      color: #2f2f2f;
    }
  }
`;

const Calendar = () => {
  const typedUseSelector: TypedUseSelectorHook<{
    [key: string]: IReducer;
  }> = useSelector;

  const dispatch = useDispatch();
  useEffect(() => {
    const userToken = getUserToken();
    dispatch(getResource(userToken));
    dispatch(getBookings(userToken));
  }, [dispatch]);

  const {
    pending: pendingResource,
    data: dataResource,
    error: errorResource,
  } = typedUseSelector((state) => state.resource);

  const {
    pending: pendingBookings,
    data: dataBookings,
    error: errorBookings,
  } = typedUseSelector((state) => state.bookings);

  if (pendingResource || pendingBookings) {
    return <Loader height={2} />;
  }

  if (errorResource || errorBookings) {
    return <div>Error ...</div>;
  }

  const { data: resourceData } = dataResource;
  const { data: bookingData } = dataBookings;
  
  console.log(bookingData);

  return (
    <CalendarElContainer>
      <h2>
        Room name: <span>{resourceData?.name}</span>
      </h2>
      <CalendarEl className="loggedIn" borderColor={'#b9b9b9'}>
        <div className="users">
          <div className="user">Users</div>
          <div className="user">Ghassen</div>
          <div className="user">Sirine</div>
        </div>
        <div className="timeLine">
          <div>
            <div className="date">{moment().format('MMM Do YY')}</div>
            <div className="hours">
              {range(BOOKING_HOURS.from, BOOKING_HOURS.to).map((e, i) => (
                <div className="hourContainer" key={i}>
                  <div className="hour">{e}</div>
                  <div className="res">res</div>
                  <div className="res">res</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CalendarEl>
    </CalendarElContainer>
  );
};

export default Calendar;
