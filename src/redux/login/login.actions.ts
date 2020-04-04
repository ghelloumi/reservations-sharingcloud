import { ACTIONS } from '../../utils/constants';
import { IResponse } from './_login.interfaces';

export const loginActions = {
  requestLogin,
  successLogin,
  failureLogin,
  logout,
};

function requestLogin(user: { username: string }) {
  return { type: ACTIONS.LOGIN_ACTIONS.LOGIN_REQUEST, user };
}

function successLogin(user: IResponse) {
  return { type: ACTIONS.LOGIN_ACTIONS.LOGIN_SUCCESS, user };
}

function failureLogin(error: any) {
  return { type: ACTIONS.LOGIN_ACTIONS.LOGIN_FAILURE, error };
}

function logout() {
  return { type: ACTIONS.LOGIN_ACTIONS.LOGOUT };
}
