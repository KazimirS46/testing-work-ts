export interface IUserContact {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface IUser {
  login: string;
  password: any;
  name: string;
  gender: string;
  post: string;
  contacts: IUserContact[];
}

export interface IModalProps {
  isOpen: Boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface IContact {
  key: number;
  checkedState: Boolean[];
  userData: IUserContact;
  index: number;
  handleOnChange: (position: number) => void;
}
