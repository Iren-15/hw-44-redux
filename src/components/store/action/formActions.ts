import { IFormUser } from "../types";

export const ADD_USER = "ADD_USER";

export const addUser = (formUser: IFormUser) => {
  return { type: ADD_USER, payload: formUser };
};

