import { API_URL } from "../../../data/Api";
import axios from "axios";
import IRegisterCredentials from "../../../data/RegisterCredential";

export const registerRequest = (newUser: IRegisterCredentials) => {
  return axios.post(`${API_URL}/candidates`, newUser).then(res => res.data);
};
