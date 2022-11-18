import { api } from "./api";

export const editUserApi = async (edit: any, id: any) => {
  const { data } = await api.patch(`users/${id}`, edit);
  return data;
};
