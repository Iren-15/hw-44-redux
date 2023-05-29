import { useSelector } from "react-redux";
import { IStore } from "../types";

export const useFormSelector = () => {
  const formUser = useSelector((state: IStore) => state.formUser);

  return formUser;
};
