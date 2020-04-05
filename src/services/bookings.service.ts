import { Dispatch } from 'redux';
import { handleResponse } from '../utils/helpers';
import { URI } from '../utils/constants';
import { IActionType, IError, ISuccess } from '../redux/_global.interfaces';
import {bookingsActions} from "../redux/bookings/bookings.actions";

export function getBookings(userToken: string) {
  return async (dispatch: Dispatch<IActionType | ISuccess | IError>) => {
    dispatch(bookingsActions.requestBookings());

    try {
      const response = await fetch(`${URI}/bookings`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await handleResponse(response);
      dispatch(bookingsActions.successBookings(data));
    } catch (error) {
      dispatch(bookingsActions.failureBookings(error.toString()));
    }
  };
}
