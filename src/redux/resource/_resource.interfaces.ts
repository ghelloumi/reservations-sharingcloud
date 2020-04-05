import { IActionType, IResponse } from '../_global.interfaces';

export interface IResourceAction extends IActionType {
  data: IResponse;
  error?: any;
}

export interface IResourceReducer {
  pending?: boolean;
  data?: any;
  error?: string;
}
