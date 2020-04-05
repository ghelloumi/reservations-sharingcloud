import { ACTIONS } from '../../utils/constants';
import { Reducer } from 'redux';
import {
  IAuthenticationAction,
  IAuthenticationReducer,
} from './_login.interfaces';

const user = JSON.parse(localStorage.getItem('user') as string);
const initialState = user
  ? { loggingIn: false, user, error: null, loggingOut: false }
  : {};

export const authentication: Reducer<
  IAuthenticationReducer,
  IAuthenticationAction
> = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_ACTIONS.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
      };
    case ACTIONS.LOGIN_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.data,
      };
    case ACTIONS.LOGIN_ACTIONS.LOGIN_FAILURE:
      return { ...state, loggingIn: false, error: action.error };
    case ACTIONS.LOGIN_ACTIONS.LOGOUT_REQUEST:
      return { ...state, loggingOut: true };
    case ACTIONS.LOGIN_ACTIONS.LOGOUT_SUCCESS:
      return { ...state, loggingOut: false, user: action.data };
    case ACTIONS.LOGIN_ACTIONS.LOGOUT_FAILURE:
      return { ...state, loggingOut: false, error: action.error };
    default:
      return state;
  }
};
