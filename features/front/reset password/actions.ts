import { ThunkAction } from "redux-thunk";
import { resetPasswordRequest } from "./requests";
import IResetPasswordCredentials from "../../../data/RestPasswordCredential";
import { IState } from "../../../shared/store";

export const RESETPASSWORD = "RESETPASSWORD";
export const RESETPASSWORD_SUCCESS = "RESETPASSWORD_SUCCESS";
export const RESETPASSWORD_FAILURE = "RESETPASSWORD_FAILURE";

export interface IResetPassword {
  type: typeof RESETPASSWORD;
}

export interface IResetPasswordSuccess {
  type: typeof RESETPASSWORD_SUCCESS;
}

export interface IResetPasswordFailure {
  type: typeof RESETPASSWORD_FAILURE;
  error: Error;
}

type ResetPasswordActions =
  | IResetPassword
  | IResetPasswordSuccess
  | IResetPasswordFailure;

export const ResetPassword = (
  resetPasswordCredentials: IResetPasswordCredentials
): ThunkAction<void, IState, void, ResetPasswordActions> => dispatch => {
  dispatch({
    type: RESETPASSWORD,
    resetPasswordCredentials
  });
  resetPasswordRequest(resetPasswordCredentials)
    .then(() => {
      dispatch(resetPasswordSuccess());
    })
    .catch((err: any) => dispatch(resetPasswordFailure(err)));
};

export const resetPasswordSuccess = (): ThunkAction<
  void,
  IState,
  void,
  IResetPasswordSuccess
> => dispatch => {
  dispatch({
    type: RESETPASSWORD_SUCCESS
  });
};

export const resetPasswordFailure = (error: Error): IResetPasswordFailure => ({
  type: RESETPASSWORD_FAILURE,
  error
});

export type All = ResetPasswordActions;
