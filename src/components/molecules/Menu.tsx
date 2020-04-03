import React from 'react';
import styled from 'styled-components';
import { IMenu } from './_molecules.interfaces';
import { media } from '../../stylingUtils/responsive.config';

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
  return (
    <MenuEl>
      {menus.map((e) => (
        <MenuLi key={e.id}>{e.name}</MenuLi>
      ))}
      <MobileMenuEl>hello</MobileMenuEl>
    </MenuEl>
  );
};

export default Menu;
