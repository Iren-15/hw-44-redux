import { IUser } from "../types";

export const ADD_USER = "ADD_USER";

export const addUser = (user: IUser) => {
  return { type: ADD_USER, payload: user };
};

