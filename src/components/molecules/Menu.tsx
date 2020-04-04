import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IMenu } from './_molecules.interfaces';
import { media } from '../../theme/responsive.config';
import Burger from '../atoms/Burger';
import ResponsiveMenu from './ResponsiveMenu';
import { Link } from 'react-router-dom';
import { MOBILE_BREAKPOINT } from '../../utils/constants';

const MenuEl = styled.nav`
  list-style: none;
  display: flex;
  z-index: 1;

  > a {
    ${media.phone} {
      display: none;
    }

    font-weight: bold;
    color: grey;
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1rem;
    text-align: center;
    padding: 0 0.5rem;
    cursor: pointer;

    &:hover {
      color: #474747;
      outline: none;
    }
  }

  > div {
    display: none;

    ${media.phone} {
      display: flex;
    }
  }
`;

const Menu: React.FunctionComponent<{
  menus: Array<IMenu>;
}> = ({ menus }) => {
  const [mobileView, setMobileView] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', () =>
      setMobileView(window.innerWidth <= MOBILE_BREAKPOINT)
    );

    return () => window.removeEventListener('resize', () => false);
  });

  const [open, setOpen] = useState(false);

  return (
    <MenuEl role="navigation" aria-label="main desktop navigation">
      {menus.map((e) => (
        <Link
          key={e.id}
          to={`/${e.name.toLowerCase()}`}
          aria-hidden={mobileView}
          aria-label={e.name}
        >
          {e.name}
        </Link>
      ))}
      <div>
        <Burger open={open} setOpen={setOpen} mobileView={mobileView} />
        <ResponsiveMenu open={open} menus={menus} setOpen={setOpen} />
      </div>
    </MenuEl>
  );
};

export default Menu;
