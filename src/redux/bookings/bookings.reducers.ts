import { ACTIONS } from '../../utils/constants';
import { Reducer } from 'redux';
import { IAction, IReducer } from '../_global.interfaces';

const initialState = { pending: false, data: {}, error: '', newBookId: '' };

export const bookings: Reducer<IReducer, IAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ACTIONS.BOOKINGS_ACTIONS.BOOKINGS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ACTIONS.BOOKINGS_ACTIONS.BOOKINGS_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case ACTIONS.BOOKINGS_ACTIONS.BOOKINGS_FAILURE:
      return { ...state, pending: false, error: action.error };
    case ACTIONS.BOOK_ACTIONS.BOOK_REQUEST:
      return { ...state, pending: true };
    case ACTIONS.BOOK_ACTIONS.BOOK_SUCCESS:
      return { ...state, pending: false, newBookId: action.data.data.bookingId };
    case ACTIONS.BOOK_ACTIONS.BOOK_FAILURE:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};
