import React, { useEffect, useRef } from 'react';
import Image from './Image';
import { IMAGES } from '../../utils/constants';
import styled from 'styled-components';

const ModalEl = styled.div`
  @keyframes animateModal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  z-index: 1;
  opacity: 0;
  animation: animateModal 300ms forwards;

  &:after {
    content: '';
    position: fixed;
    background: #424242b5;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }

  .modal__container {
    max-width: 80%;
    max-height: 60%;
    min-height: 50%;
    min-width: 60%;
    background: #f5f5f5;
    position: absolute;
    z-index: 1;
    border-radius: 1rem;
    box-shadow: 0 0 1rem #3c3c3c;
    padding: 1rem;
    overflow: overlay;

    &__close {
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0.5rem 1rem;

      > img {
        height: 1.5rem;
        cursor: pointer;
      }
    }

    &__content {
      padding: 0 1rem;
      display: flex;
      flex-direction: column;

      > span {
        text-align: initial;
        font-size: 1.5rem;
        margin-top: -2.5rem;
        padding: 0 1rem;
        color: #505050;
        font-weight: 600;
        width: 50%;
      }
    }
  }
`;

const Modal: React.FunctionComponent<{
  children: React.ReactElement | string;
  close: any;
}> = ({ children, close }) => {
  const modalContainer = useRef(null);
  const modalContainerClose = useRef(null);

  useEffect(() => {
    window.addEventListener('click', clickOutsideHandler);
    return () => {
      window.removeEventListener('click', clickOutsideHandler);
    };
  });

  const clickOutsideHandler = (e: any) => {
    if (
      // @ts-ignore
      !modalContainer?.current?.contains(e.target) ||
      // @ts-ignore
      modalContainerClose?.current?.childNodes[0] === e.target
    ) {
      console.log('closing..');
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    // console.log('closing..')
    close();
  };

  return (
    <ModalEl className="modal">
      <div className="modal__container" ref={modalContainer}>
        <div className="modal__container__close" ref={modalContainerClose}>
          <Image
            src={IMAGES.close}
            alt="Close Modal"
            onClick={handleCloseModal}
            className="closeModal"
          />
        </div>
        <div className="modal__container__content">{children}</div>
      </div>
    </ModalEl>
  );
};

export default Modal;
