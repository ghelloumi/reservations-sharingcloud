import { MOBILE_BREAKPOINT } from '../utils/constants';

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  phone: customMediaQuery(MOBILE_BREAKPOINT),
};
