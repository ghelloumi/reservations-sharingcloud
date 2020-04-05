import { ACTIONS } from '../../utils/constants';
import { Reducer } from 'redux';
import {IAction, IReducer} from "../_global.interfaces";

const initialState = { pending: false, data: {}, error: '' };

export const resource: Reducer<IReducer, IAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ACTIONS.RESOURCE_ACTIONS.RESOURCE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ACTIONS.RESOURCE_ACTIONS.RESOURCE_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case ACTIONS.RESOURCE_ACTIONS.RESOURCE_FAILURE:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};
