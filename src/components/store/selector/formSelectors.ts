import { useSelector } from "react-redux";
import { IStore } from "../types";

export const useUserSelector = () => {
  const user = useSelector((state: IStore) => state.user);

  return user;
};
