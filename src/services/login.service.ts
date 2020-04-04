import { loginActions } from '../redux/login/login.actions';
import { Dispatch } from 'redux';
import {
  IError,
  IFailureLogin,
  IRequestLogin,
  ISuccessLogin,
} from '../redux/login/_login.interfaces';

function handleResponse(response: any) {
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        window.location.reload();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export function login(username: string) {
  return async (
    dispatch: Dispatch<IRequestLogin | ISuccessLogin | IFailureLogin | IError>
  ) => {
    dispatch(loginActions.requestLogin({ username }));

    try {
      const response = await fetch('http://localhost:4000/login');
      const user = await handleResponse(response);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(loginActions.successLogin(user));
      window.location.href = "/"
    } catch (error) {
      dispatch(loginActions.failureLogin(error.toString()));
    }
  };
}

export function logout() {
  loginActions.logout();
}
