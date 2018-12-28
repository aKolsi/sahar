import * as yup from "yup";
import {
  isTooShort,
  isTooLong,
  isInvalid,
  isRequired,
  isMatched
} from "./errors";

export const validationSchema = yup.object().shape({
  userName: yup.string().required(isRequired("userName")),
  email: yup
    .string()
    .min(3, isTooShort("Email"))
    .max(50, isTooLong("Email"))
    .email(isInvalid("Email"))
    .required(isRequired("Email")),
  cin: yup
    .number()
    .test("len", isInvalid("CIN"), val => val.toString().length === 8)
    .required(isRequired("CIN")),
  password: yup
    .string()
    .min(8, isTooShort("Password"))
    .max(30, isTooLong("Password"))
    .required(isRequired("Password")),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(isMatched("Password"))
});

interface IRegisterCredentials {
  userName: string;
  email: string;
  cin: number;
  password: string;
  confirmPassword: string;
}

export default IRegisterCredentials;
