import React, { useState } from 'react';
import styled from 'styled-components';
import { IMenu } from './_molecules.interfaces';
import { media } from '../../theme/responsive.config';
import Burger from '../atoms/Burger';
import ResponsiveMenu from './ResponsiveMenu';

const MenuEl = styled.ul`
  list-style: none;
  display: flex;
`;
const MenuLi = styled.li`
  ${media.phone} {
    display: none;
  }
`;

const MobileMenuEl = styled.div`
  display: none;

  ${media.phone} {
    display: flex;
  }
`;

const Menu: React.FunctionComponent<{
  menus: Array<IMenu>;
}> = ({ menus }) => {
  const [open, setOpen] = useState(false);

  return (
    <MenuEl>
      {menus.map((e) => (
        <MenuLi key={e.id}>{e.name}</MenuLi>
      ))}
      <MobileMenuEl>
        <Burger open={open} setOpen={setOpen} />
        <ResponsiveMenu open={open} menus={menus}/>
      </MobileMenuEl>
    </MenuEl>
  );
};

export default Menu;
