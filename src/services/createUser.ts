import { iUser } from "../contexts/UserContext";
import { api } from "./api";

export const postUserApi = async (reg: iUser) => {
  return await api.post("/register", reg);
};
