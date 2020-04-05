import React from 'react';
import styled from 'styled-components';
import { IResponsiveMenu } from './_molecules.interfaces';
import { Link } from 'react-router-dom';
import Logout from '../atoms/Logout';

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  transform: ${({ open }) => (open ? 'translateX(-100%)' : 'translateX(0)')};
  transition: transform 0.3s ease-in-out;

  a {
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: grey;
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.5rem;
    text-align: center;

    &:hover {
      color: #474747;
      outline: none;
    }
  }
`;

const ResponsiveMenu: React.FunctionComponent<IResponsiveMenu> = ({
  open,
  setOpen,
  menus,
}) => {
  return (
    <StyledMenu
      open={open}
      role="navigation"
      aria-label="main mobile navigation"
    >
      {menus.map((e) =>
        e.name.toLowerCase() !== 'logout' ? (
          <Link
            key={e.id}
            to={`/${e.name.toLowerCase()}`}
            aria-hidden={!open}
            aria-label={e.name}
            onClick={() => setOpen(!open)}
          >
            {e.name}
          </Link>
        ) : (
          <Logout
            key={e.id}
            ariaHidden={!open}
            ariaLabel={e.name}
            handleClick={() => setOpen(!open)}
          />
        )
      )}
    </StyledMenu>
  );
};
export default ResponsiveMenu;
