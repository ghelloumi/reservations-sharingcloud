import React from 'react';
import { IMAGES } from '../../utils/constants';
import Image from './Image';

const Loader: React.FunctionComponent<{ height?: number }> = ({ height }) => (
  <Image
    alt="Login loading"
    src={IMAGES.loader}
    className="LoadingImage"
    height={height}
  />
);

export default Loader;
