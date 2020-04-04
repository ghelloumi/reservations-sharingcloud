import React, { useState } from 'react';
import styled from 'styled-components';
import { IMenu } from './_molecules.interfaces';
import { media } from '../../theme/responsive.config';
import Burger from '../atoms/Burger';
import ResponsiveMenu from './ResponsiveMenu';
import { isMobile } from '../../utils/helpers';

const MenuEl = styled.nav`
  list-style: none;
  display: flex;

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
  const [open, setOpen] = useState(false);

  return (
    <MenuEl aria-label="main navigation">
      {menus.map((e) => (
        <a key={e.id} href="/" aria-hidden={!isMobile} aria-label={e.name}>
          {e.name}
        </a>
      ))}
      <div>
        <Burger open={open} setOpen={setOpen} />
        <ResponsiveMenu open={open} menus={menus} />
      </div>
    </MenuEl>
  );
};

export default Menu;
