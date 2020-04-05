export interface IImage {
  alt: string;
  src: string;
  className: string;
  height?: number;
}

export interface IBurger {
  open: boolean;
  setOpen: any;
  mobileView: boolean;
}
