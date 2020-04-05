import { combineReducers } from 'redux';
import { authentication } from './login/login.reducers';
import { resource } from './resource/resource.reducers';

const reducers = combineReducers({
  authentication,
  resource,
});

export default reducers;
