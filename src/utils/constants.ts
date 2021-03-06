import logo from '../assets/logo.png';
import imageNotFound from '../assets/imageNotFound.png';
import meeting from '../assets/meeting.jpg';
import loader from '../assets/loader.gif';
import meetingHor from '../assets/meetingHor.jpg';
import close from '../assets/close.jpg';
import { IActionsMap, IBookingHours, IStringMap } from './_config.interfaces';

export const URI = process.env.REACT_APP_URI;

export const MOBILE_BREAKPOINT: number = 568;

export const IMAGES: IStringMap = {
  logo,
  imageNotFound,
  meeting,
  loader,
  meetingHor,
  close
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
    LOGOUT_FAILURE: 'LOGOUT_FAILURE',
  },
  RESOURCE_ACTIONS: {
    RESOURCE_REQUEST: 'RESOURCE_REQUEST',
    RESOURCE_SUCCESS: 'RESOURCE_SUCCESS',
    RESOURCE_FAILURE: 'RESOURCE_FAILURE',
  },
  BOOKINGS_ACTIONS: {
    BOOKINGS_REQUEST: 'BOOKINGS_REQUEST',
    BOOKINGS_SUCCESS: 'BOOKINGS_SUCCESS',
    BOOKINGS_FAILURE: 'BOOKINGS_FAILURE',
  },
  BOOK_ACTIONS: {
    BOOK_REQUEST: 'BOOK_REQUEST',
    BOOK_SUCCESS: 'BOOK_SUCCESS',
    BOOK_FAILURE: 'BOOK_FAILURE',
  },
  DELETE_BOOK_ACTIONS: {
    DELETE_BOOK_REQUEST: 'DELETE_BOOK_REQUEST',
    DELETE_BOOK_SUCCESS: 'DELETE_BOOK_SUCCESS',
    DELETE_BOOK_FAILURE: 'DELETE_BOOK_FAILURE',
  }
};

export const BOOKING_HOURS: IBookingHours = {
  from: 0,
  to: 23,
};
