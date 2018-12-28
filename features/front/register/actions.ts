import { ThunkAction } from "redux-thunk";

import { registerRequest } from "./requests";
import IRegisterCredentials from "../../../data/RegisterCredential";

import { IState } from "../../../shared/store";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export interface IRegister {
  type: typeof REGISTER;
}

export interface IRegisterSuccess {
  type: typeof REGISTER_SUCCESS;
}

export interface IRegisterFailure {
  type: typeof REGISTER_FAILURE;
  error: Error;
}

type RegisterActions = IRegister | IRegisterSuccess | IRegisterFailure;

export const register = (
  registerCredentials: IRegisterCredentials
): ThunkAction<void, IState, void, RegisterActions> => dispatch => {
  dispatch({
    type: REGISTER,
    registerCredentials
  });
  registerRequest(registerCredentials)
    .then(() => {
      dispatch(registerSuccess());
    })
    .catch((err: any) => dispatch(registerFailure(err)));
};

export const registerSuccess = (): ThunkAction<
  void,
  IState,
  void,
  IRegisterSuccess
> => dispatch => {
  dispatch({
    type: REGISTER_SUCCESS
  });
};

export const registerFailure = (error: Error): IRegisterFailure => ({
  type: REGISTER_FAILURE,
  error
});

export type All = RegisterActions;
