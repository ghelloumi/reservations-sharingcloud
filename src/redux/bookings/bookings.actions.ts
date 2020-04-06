import { ACTIONS } from '../../utils/constants';
import { IResponse } from '../_global.interfaces';

export const bookingsActions = {
  requestBookings,
  successBookings,
  failureBookings,
  requestBook,
  successBook,
  failureBook,
  requestDeleteBook,
  successDeleteBook,
  failureDeleteBook,
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

function requestBook() {
  return { type: ACTIONS.BOOK_ACTIONS.BOOK_REQUEST };
}

function successBook(data: IResponse) {
  return { type: ACTIONS.BOOK_ACTIONS.BOOK_SUCCESS, data };
}

function failureBook(error: string) {
  return { type: ACTIONS.BOOK_ACTIONS.BOOK_FAILURE, error };
}

function requestDeleteBook() {
  return { type: ACTIONS.DELETE_BOOK_ACTIONS.DELETE_BOOK_REQUEST };
}

function successDeleteBook(data: IResponse) {
  return { type: ACTIONS.DELETE_BOOK_ACTIONS.DELETE_BOOK_SUCCESS, data };
}

function failureDeleteBook(error: string) {
  return { type: ACTIONS.DELETE_BOOK_ACTIONS.DELETE_BOOK_FAILURE, error };
}
