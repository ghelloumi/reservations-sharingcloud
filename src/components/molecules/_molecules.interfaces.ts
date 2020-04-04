export interface IMenu {
  id: number;
  name: string;
}

export interface IResponsiveMenu {
  open: boolean;
  menus: IMenu[];
}
