import React, {SyntheticEvent} from 'react';
import {IMAGES} from '../../utils/constants';
import styled from 'styled-components';
import {IImage} from "./_atoms.interfaces";

const ImageEl = styled.img`
  // height: ${(props) => props.height}rem;
`;

const onError = (e: SyntheticEvent) => {
  if (e.target) {
    // @ts-ignore
    e.target.src = IMAGES.imageNotFound;
  }
};

const Image: React.FunctionComponent<IImage> = ({alt, src, className}) => {
  return (
    <ImageEl alt={alt} src={src} onError={onError} className={className}/>
  );
};

export default Image;
