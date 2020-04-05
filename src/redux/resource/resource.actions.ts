import { ACTIONS } from '../../utils/constants';
import { IResponse } from '../_global.interfaces';

export const resourceActions = {
  requestResource,
  successResource,
  failureResource,
};

function requestResource() {
  return { type: ACTIONS.RESOURCE_ACTIONS.RESOURCE_REQUEST };
}

function successResource(data: IResponse) {
  return { type: ACTIONS.RESOURCE_ACTIONS.RESOURCE_SUCCESS, data };
}

function failureResource(error: string) {
  return { type: ACTIONS.RESOURCE_ACTIONS.RESOURCE_FAILURE, error };
}
