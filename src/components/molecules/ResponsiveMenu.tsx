import React from 'react';
import styled from 'styled-components';
import { IMenu } from './_molecules.interfaces';

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
  width: 12rem;
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
      color: grey;
    }
  }
`;

const ResponsiveMenu: React.FunctionComponent<{
  open: boolean;
  menus: IMenu[];
}> = ({ open, menus }) => {
  return (
    <StyledMenu open={open}>
      {menus.map(e => (
        <a key={e.id} href="/">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
          {e.name}
        </a>
      ))}
    </StyledMenu>
  );
};
export default ResponsiveMenu;
