// import axios from "axios";
import { ThunkAction } from "redux-thunk";

import { submitApplicationRequest } from "./requests";
import IApplicationCredentials from "../../../data/ApplicationCredential";
import { IState } from "../../../shared/store";

export const SUBMIT_APPLICATION = "SUBMIT_APPLICATION";
export const SUBMIT_APPLICATION_SUCCESS = "SUBMIT_APPLICATION_SUCCESS";
export const SUBMIT_APPLICATION_FAILURE = "SUBMIT_APPLICATION_FAILURE";

export interface ISubmitApplicatopn {
  type: typeof SUBMIT_APPLICATION;
}

export interface ISubmitApplicatopnSuccess {
  type: typeof SUBMIT_APPLICATION_SUCCESS;
}

export interface ISubmitApplicatopnFailure {
  type: typeof SUBMIT_APPLICATION_FAILURE;
  error: Error;
}

export type ApplicationActions =
  | ISubmitApplicatopn
  | ISubmitApplicatopnSuccess
  | ISubmitApplicatopnFailure;

export const submitApplication = (
  ApplicationCredentials: IApplicationCredentials
): ThunkAction<void, IState, void, ApplicationActions> => dispatch => {
  dispatch({
    type: SUBMIT_APPLICATION,
    ApplicationCredentials
  });
  submitApplicationRequest(ApplicationCredentials)
    // .then(() => {})
    .catch((err: any) => dispatch(submitApplicationFailure(err)));
};

export const submitApplicationSuccess = (): ThunkAction<
  void,
  IState,
  void,
  ISubmitApplicatopnSuccess
> => dispatch => {
  dispatch({
    type: SUBMIT_APPLICATION_SUCCESS
  });
};

export const submitApplicationFailure = (
  error: Error
): ISubmitApplicatopnFailure => ({
  type: SUBMIT_APPLICATION_FAILURE,
  error
});
