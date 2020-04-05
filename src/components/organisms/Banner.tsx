import React from 'react';
import styled from 'styled-components';
import Image from '../atoms/Image';
import { IMAGES, TEXTS } from '../../utils/constants';
import Menu from '../molecules/Menu';
import { IMenu } from '../molecules/_molecules.interfaces';
import { isLoggedIn } from '../../utils/helpers';

const BannerEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 3rem;
  background: #f0f0f0;
  box-shadow: 0 0 2rem #cccccc;
  position: relative;
  position: fixed;
  width: 100%;
  z-index: 1;

  > span {
    color: #4d4d4d;
    font-weight: 600;
    font-size: 1.2rem;
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
  }
`;

const ImageEl = styled(Image)`
  height: 2rem;
`;

const menus: Array<IMenu> = [
  { id: 0, name: 'Home' },
  { id: 1, name: isLoggedIn() ? 'Logout' : 'Login' },
];

const Banner: React.FunctionComponent = () => {
  return (
    <BannerEl role="banner">
      <ImageEl
        alt="Application Logo"
        src={IMAGES.logo}
        className="header__logo"
      />
      <span aria-label="App title">{TEXTS.APP_TITLE}</span>
      <Menu menus={menus} />
    </BannerEl>
  );
};

export default Banner;
