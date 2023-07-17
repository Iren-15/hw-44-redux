export interface IAction {
  type: string;
  payload: any;
}

export interface IUser {
  id: string;
  username: string;
  userlastname: string;
  useremail: string
}

export interface IStore {
  user: IUser[];
}
