import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../services/login.service';
import { getUserToken } from '../../utils/helpers';

const Logout: React.FunctionComponent<{
  ariaHidden: boolean;
  ariaLabel: string;
  handleClick?: any;
}> = ({ ariaHidden, ariaLabel, handleClick }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    const userToken = getUserToken();
    if (userToken) {
      if (handleClick) handleClick();
      dispatch(logout(userToken));
    }
  };

  return (
    <a
      href="#"
      onClick={handleLogout}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
    >
      Logout
    </a>
  );
};

export default Logout;
