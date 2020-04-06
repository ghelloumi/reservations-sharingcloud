import React, { useEffect, useRef } from 'react';
import Image from './Image';
import { IMAGES } from '../../utils/constants';

const Modal: React.FunctionComponent<{
  children: React.ReactElement | string;
  close: any;
}> = ({ children, close }) => {
  const modalContainer = useRef(null);
  const modalContainerClose = useRef(null);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (
        // @ts-ignore
        !modalContainer?.current?.contains(e.target) ||
        // @ts-ignore
        modalContainerClose?.current?.childNodes[0] === e.target
      ) {
        handleCloseModal();
      }
    });
    return () => {
      window.removeEventListener('click', () => false);
    };
  });

  const handleCloseModal = () => {
    close();
  };

  return (
    <div className="modal">
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
    </div>
  );
};

export default Modal;
