interface IActionType {
  type: string;
}

export interface IResponse {
  token: string;
  expirationDate: string;
}

export interface IRequestLogin extends IActionType {
  user: { username: string };
}

export interface ISuccessLogin extends IActionType {
  user: IResponse;
}

export interface IFailureLogin extends IActionType {
  error: any;
}

export interface IError extends IActionType {
  message: string;
}

export interface IAuthenticationAction extends IActionType {
  user: { username: string } | { token: string; expirationDate: string };
}

export interface IAuthenticationReducer {
  loggingIn?: boolean;
  user?: any;
}
