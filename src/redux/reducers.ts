import { combineReducers } from 'redux';
import { authentication } from './login/login.reducers';
import { resource } from './resource/resource.reducers';
import { bookings } from './bookings/bookings.reducers';

const reducers = combineReducers({
  authentication,
  resource,
  bookings,
});

export default reducers;
