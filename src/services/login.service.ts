import { loginActions } from '../redux/login/login.actions';
import { Dispatch } from 'redux';
import {
  IRequestLogin,
  ISuccessLogout,
} from '../redux/login/_login.interfaces';
import {URI} from "../utils/constants";
import {handleResponse} from "../utils/helpers";
import {IError, ISuccess} from "../redux/_global.interfaces";

export function login(username: string) {
  return async (
    dispatch: Dispatch<IRequestLogin | ISuccess | IError>
  ) => {
    dispatch(loginActions.requestLogin({ username }));

    try {
      const response = await fetch(`${URI}/login`);
      const data = await handleResponse(response, 'login');
      localStorage.setItem('user', JSON.stringify(data));
      dispatch(loginActions.successLogin(data));
      window.location.href = '/';
    } catch (error) {
      dispatch(loginActions.failureLogin(error.toString()));
    }
  };
}

export function logout(userToken?: string) {
  return async (
    dispatch: Dispatch<ISuccessLogout | IRequestLogin | IError>
  ) => {
    dispatch(loginActions.requestLogout());

    try {
      const result = await fetch(`${URI}/logout`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await handleResponse(result);
      localStorage.removeItem('user');
      window.location.href = '/';
      dispatch(loginActions.successLogout(data));
    } catch (error) {
      dispatch(loginActions.failureLogout(error.toString()));
    }
  };
}
