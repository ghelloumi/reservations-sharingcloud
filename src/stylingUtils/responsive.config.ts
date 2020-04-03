const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;
export const media = {
  phone: customMediaQuery(568),
};
