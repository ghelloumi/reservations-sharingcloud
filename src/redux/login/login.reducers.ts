import { ACTIONS } from '../../utils/constants';
import { Reducer } from 'redux';
import {
  IAuthenticationAction,
  IAuthenticationReducer,
} from './_login.interfaces';

const user = JSON.parse(localStorage.getItem('user') as string);
const initialState = user ? { loggingIn: false, user } : {};

export const authentication: Reducer<
  IAuthenticationReducer,
  IAuthenticationAction
> = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_ACTIONS.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case ACTIONS.LOGIN_ACTIONS.LOGIN_SUCCESS:
      return {
        loggingIn: false,
        user: action.user,
      };
    case ACTIONS.LOGIN_ACTIONS.LOGIN_FAILURE:
      return { loggingIn: false };
    case ACTIONS.LOGIN_ACTIONS.LOGOUT:
      return {};
    default:
      return state;
  }
};
