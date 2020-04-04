import React from 'react';
import styled from 'styled-components';
import { IBurger } from './_atoms.interfaces';

const StyledBurger = styled.button<{ open: boolean }>`
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.6rem;
    height: 0.2rem;
    background: grey;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
      transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${(props) => (props.open ? '0' : '1')};
      transform: ${(props) =>
        props.open ? 'translateX(-20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger: React.FunctionComponent<IBurger> = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
      aria-label={`${open ? 'Close' : 'Open'} the menu`}
      aria-expanded={open}
      aria-haspopup="dialog"
      aria-controls="menu"
      title="MobileMenu"
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
