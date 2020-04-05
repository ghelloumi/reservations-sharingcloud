import { Dispatch } from 'redux';
import { handleResponse } from '../utils/helpers';
import { URI } from '../utils/constants';
import { resourceActions } from '../redux/resource/resource.actions';

import { IActionType, IError, ISuccess } from '../redux/_global.interfaces';

export function getResource(userToken: string) {
  return async (dispatch: Dispatch<IActionType | ISuccess | IError>) => {
    dispatch(resourceActions.requestResource());

    try {
      const response = await fetch(`${URI}/resource`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await handleResponse(response);
      dispatch(resourceActions.successResource(data));
    } catch (error) {
      dispatch(resourceActions.failureResource(error.toString()));
    }
  };
}
