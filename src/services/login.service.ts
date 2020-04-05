import { loginActions } from '../redux/login/login.actions';
import { Dispatch } from 'redux';
import {
  IError,
  IFailureLogin,
  IRequestLogin,
  ISuccessLogin,
  ISuccessLogout,
} from '../redux/login/_login.interfaces';

function handleResponse(response: any, type?: string) {
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401 && type === 'login') {
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
      const user = await handleResponse(response, 'login');
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(loginActions.successLogin(user));
      window.location.href = '/';
    } catch (error) {
      dispatch(loginActions.failureLogin(error.toString()));
    }
  };
}

export function logout(userToken?: string) {
  return async (
    dispatch: Dispatch<ISuccessLogout | IRequestLogin | IFailureLogin | IError>
  ) => {
    dispatch(loginActions.requestLogout());

    try {
      const result = await fetch('http://localhost:4000/logout', {
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
