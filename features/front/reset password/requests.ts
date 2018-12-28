import { API_URL } from "../../../data/Api";
import axios from "axios";
import IResetPasswordCredentials from "../../../data/RestPasswordCredential";

export const resetPasswordRequest = (newPass: IResetPasswordCredentials) => {
  return axios.post(`${API_URL}/candidates/`, newPass).then(res => res.data);
};
