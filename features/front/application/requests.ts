import axios from "axios";
import IApplicationCredentials from "../../../data/ApplicationCredential";
import { API_URL } from "../../../data/Api";

export const submitApplicationRequest = (
  applicationCredientials: IApplicationCredentials
): Promise<IApplicationCredentials> => {
  return axios
    .post(`${API_URL}/answer`, applicationCredientials)
    .then(res => res.data);
};
export const getApplication = (
  id: number
): Promise<IApplicationCredentials> => {
  return axios.get(`${API_URL}/answer/${id}`).then(res => res.data);
};
