import React from 'react';
// import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../services/login.service';

const Logout: React.FunctionComponent<{
  ariaHidden: boolean;
  ariaLabel: string;
  handleClick?: any;
}> = ({ ariaHidden, ariaLabel, handleClick }) => {
  // const [navigate, setNavigate] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    const user = localStorage.getItem('user');
    if (user) {
      if (handleClick) handleClick();
      dispatch(logout(JSON.parse(user)?.data?.token));
      // setNavigate(true);
    }
  };

  // if (navigate) {
  //   return <Redirect to="/" push={true} />;
  // }

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
