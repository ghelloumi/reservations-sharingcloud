import logo from '../assets/logo.png';
import imageNotFound from '../assets/imageNotFound.png';
import meeting from '../assets/meeting.jpg';
import loader from '../assets/loader.gif';
import meetingHor from '../assets/meetingHor.jpg';
import { IActionsMap, IStringMap } from './_config.interfaces';

export const URI = process.env.REACT_APP_URI;

export const MOBILE_BREAKPOINT: number = 568;

export const IMAGES: IStringMap = {
  logo,
  imageNotFound,
  meeting,
  loader,
  meetingHor,
};

export const TEXTS: IStringMap = {
  APP_TITLE: 'Reservation de salles',
};

export const ACTIONS: IActionsMap = {
  LOGIN_ACTIONS: {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT_REQUEST: 'LOGOUT_REQUEST',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGOUT_FAILURE: 'LOGOUT_FAILURE'
  },
};
