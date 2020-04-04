import { combineReducers } from 'redux';
import {authentication} from "./login/login.reducers";

const reducers = combineReducers({
  authentication,
});

export default reducers;
