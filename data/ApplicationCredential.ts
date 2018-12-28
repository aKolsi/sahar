import * as yup from "yup";

export const validationSchema = yup.object().shape({
  questionOne: yup.string(),
  questionTwo: yup.string(),
  questionThree: yup.string(),
  questionFour: yup.string()
});

interface IApplicationCredentials {
  questionOne: string;
  questionTwo: string;
  questionThree: string;
  questionFour: string;
}

export default IApplicationCredentials;
