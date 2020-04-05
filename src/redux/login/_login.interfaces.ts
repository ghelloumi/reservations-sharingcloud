interface IActionType {
  type: string;
}

export interface IResponse {
  token: string;
  expirationDate: string;
}

export interface IRequestLogin extends IActionType {
  user?: { username: string };
}

export interface ISuccessLogin extends IActionType {
  user: IResponse;
}

export interface IFailureLogin extends IActionType {
  error: any;
}

export interface ISuccessLogout extends IActionType {
  data: null;
}

export interface IError extends IActionType {
  message: string;
}

export interface IAuthenticationAction extends IActionType {
  user: { username: string } | IResponse;
  error?: any;
  data: ISuccessLogout;
}

export interface IAuthenticationReducer {
  loggingIn?: boolean;
  user?: { username: string } | IResponse | ISuccessLogout;
  loggingOut?: boolean;
  error?: any;
}
