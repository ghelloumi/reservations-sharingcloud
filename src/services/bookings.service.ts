import { Dispatch } from 'redux';
import { getHeaders, handleResponse } from '../utils/helpers';
import { URI } from '../utils/constants';
import { IActionType, IError, ISuccess } from '../redux/_global.interfaces';
import { bookingsActions } from '../redux/bookings/bookings.actions';
import moment from 'moment';

export function getBookings(userToken: string) {
  return async (dispatch: Dispatch<IActionType | ISuccess | IError>) => {
    dispatch(bookingsActions.requestBookings());

    try {
      // Get bookings
      const response = await fetch(`${URI}/bookings`, getHeaders(userToken));
      const data = await handleResponse(response);

      // Get Logged User Data
      const responseMe = await fetch(`${URI}/me`, getHeaders(userToken));
      const loggedUserData = await handleResponse(responseMe);

      // Assigns users names to bookings
      const userIds = data.data
        .map((e: any) => e.userId)
        .filter(
          (item: string, pos: number, arr: any) => arr.indexOf(item) === pos
        );

      Promise.all(
        userIds.map(
          async (i: string) =>
            await (
              await fetch(`${URI}/users/${i}`, getHeaders(userToken))
            ).json()
        )
      ).then((users: any) => {
        const finalData = users.map((user: any) => {
          const booked: any[] = [];
          data.data.forEach((e: any) =>
            user.data.id === e.userId ? booked.push(e) : null
          );

          return {
            ...user.data,
            booked: booked.map((e: any) => {
              const mStart = parseInt(moment(e.start).format('mm'), 10);
              const hStart = parseInt(moment(e.start).format('HH'), 10);
              const mEnd = parseInt(moment(e.end).format('mm'), 10);
              const hEnd = parseInt(moment(e.end).format('HH'), 10);
              const duration =
                ((hEnd * 60 + mEnd - (hStart * 60 + mStart)) * 100) / 60;
              return {
                ...e,
                duration,
                startDate: e.start,
                start: {
                  h: hStart,
                  m: mStart,
                  p: (mStart * 100) / 60,
                },
                end: {
                  h: hEnd,
                  m: mEnd,
                  p: (mEnd * 100) / 60,
                },
              };
            }),
            loggedUser: user.data.ide === loggedUserData.data.id,
          };
        });

        dispatch(
          bookingsActions.successBookings({
            ...data,
            data: finalData,
          })
        );
      });
    } catch (error) {
      dispatch(bookingsActions.failureBookings(error.toString()));
    }
  };
}

export function addBook(userToken: string, book: any) {
  return async (dispatch: Dispatch<IActionType | ISuccess | IError>) => {
    dispatch(bookingsActions.requestBook());

    try {
      const response = await fetch(`${URI}/resource`, {
        ...getHeaders(userToken),
        body: JSON.stringify(book),
        method: 'POST',
      });
      const data = await handleResponse(response);
      dispatch(bookingsActions.successBook(data));
    } catch (error) {
      dispatch(bookingsActions.failureBook(error.toString()));
    }
  };
}

export function deleteBook(userToken: string, id: string) {
  return async (dispatch: Dispatch<IActionType | ISuccess | IError>) => {
    dispatch(bookingsActions.requestDeleteBook());

    try {
      const response = await fetch(`${URI}/bookings/${id}`, {
        ...getHeaders(userToken),
        method: 'DELETE',
      });
      const data = await handleResponse(response);
      dispatch(bookingsActions.successDeleteBook(data));
    } catch (error) {
      dispatch(bookingsActions.failureDeleteBook(error.toString()));
    }
  };
}
