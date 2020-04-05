import { ACTIONS } from '../../utils/constants';
import {IResponse} from "../_global.interfaces";

export const loginActions = {
  requestLogin,
  successLogin,
  failureLogin,
  requestLogout,
  successLogout,
  failureLogout,
};

function requestLogin(user: { username: string }) {
  return { type: ACTIONS.LOGIN_ACTIONS.LOGIN_REQUEST, user };
}

function successLogin(data: IResponse) {
  return { type: ACTIONS.LOGIN_ACTIONS.LOGIN_SUCCESS, data };
}

function failureLogin(error: string) {
  return { type: ACTIONS.LOGIN_ACTIONS.LOGIN_FAILURE, error };
}

function requestLogout() {
  return { type: ACTIONS.LOGIN_ACTIONS.LOGOUT_REQUEST };
}

function successLogout(data: any) {
  return { type: ACTIONS.LOGIN_ACTIONS.LOGOUT_SUCCESS, data };
}

function failureLogout(error: string) {
  return { type: ACTIONS.LOGIN_ACTIONS.LOGOUT_FAILURE, error };
}
