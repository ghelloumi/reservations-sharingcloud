export interface IActionType {
  type: string;
}

export interface IResponse {
  [key: string]: string | number;
}

export interface IError extends IActionType {
  message: string;
}

export interface ISuccess extends IActionType {
  data: IResponse;
}
