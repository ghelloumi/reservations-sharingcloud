import {IActionType, IResponse} from "../_global.interfaces";

export interface IRequestLogin extends IActionType {
  user?: { username: string };
}

export interface ISuccessLogout extends IActionType {
  data: null;
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
