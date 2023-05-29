import { ADD_USER } from "../action/formActions";
import { IAction, IStore } from "../types";

export const formReducer = (
  state: IStore["formUser"] = [],
  action: IAction<any>
) => {

  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};
