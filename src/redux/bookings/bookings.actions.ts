import { ACTIONS } from '../../utils/constants';
import { IResponse } from '../_global.interfaces';

export const bookingsActions = {
  requestBookings,
  successBookings,
  failureBookings,
};

function requestBookings() {
  return { type: ACTIONS.BOOKINGS_ACTIONS.BOOKINGS_REQUEST };
}

function successBookings(data: IResponse) {
  return { type: ACTIONS.BOOKINGS_ACTIONS.BOOKINGS_SUCCESS, data };
}

function failureBookings(error: string) {
  return { type: ACTIONS.BOOKINGS_ACTIONS.BOOKINGS_FAILURE, error };
}
