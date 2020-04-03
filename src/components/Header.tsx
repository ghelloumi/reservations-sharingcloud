import React from 'react';
import styled from 'styled-components';
import Image from './atoms/Image';
import { IMAGES, TEXTS } from '../utils/constants';
import Menu from './molecules/Menu';
import { IMenu } from './molecules/_molecules.interfaces';

const HeaderEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 3rem;
  background: #f0f0f0;
  box-shadow: 0 0 2rem #cccccc;
  position: relative;
`;

const ImageEl = styled(Image)`
  height: 2rem;
`;

const AppTitleEl = styled.span`
  color: #4d4d4d;
  font-weight: 600;
`;

const menus: Array<IMenu> = [
  { id: 0, name: 'Home' },
  { id: 1, name: 'Login' },
];

const Header: React.FunctionComponent = () => {
  return (
    <HeaderEl>
      <ImageEl
        alt="Application Logo"
        src={IMAGES.logo}
        className="header__logo"
      />
      <AppTitleEl>{TEXTS.APP_TITLE}</AppTitleEl>
      <Menu menus={menus} />
    </HeaderEl>
  );
};

export default Header;
