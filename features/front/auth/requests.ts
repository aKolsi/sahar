import axios from "axios";
import IloginCredentials from "../../../data/LoginCredential";
import { API_URL } from "../../../data/Api";
import IToken from "../../../data/Token";
import IUser from "src/data/User";

export const loginRequest = (
  credientials: IloginCredentials
): Promise<IToken> => {
  return axios
    .post(`${API_URL}/candidates/login`, credientials)
    .then(res => res.data);
};
export const getUser = (id: number): Promise<IUser> => {
  return axios.get(`${API_URL}/candidates/${id}`).then(res => res.data);
};
