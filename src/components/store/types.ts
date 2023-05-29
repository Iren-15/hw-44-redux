export interface IAction<T> {
  type: string;
  payload: T;
}

export interface IFormUser {
  id: string;
  username: string;
  userlastname: string;
  useremail: string
}

export interface IStore {
  formUser: IFormUser[];
}
