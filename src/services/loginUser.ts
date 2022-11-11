import { iUser } from "../contexts/UserContext";
import { api } from "./api";

export const loginUserApi = async (log: iUser) => {
  const { data } = await api.post("/login", log);
  return data;
};
