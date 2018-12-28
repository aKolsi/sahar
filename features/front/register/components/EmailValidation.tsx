import * as React from "react";

import { Component } from "react";
import { Fragment } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RouterAction, push } from "react-router-redux";
import Axios from "axios";
import { API_URL } from "../../../../data/Api";

interface ForgotMyPasswordProps {
  onDidMount: () => void;
}

class EmailValidation extends Component<ForgotMyPasswordProps> {
  componentDidMount() {
    const tokenStr = window.location.href.split("?")[1];
    Axios.get(`${API_URL}/candidates/confirm?${tokenStr}`);
    setTimeout(this.props.onDidMount, 3000);
  }
  render() {
    return (
      <Fragment>
        <h1>Your Email has been Confirmed</h1>
        <br />
        <h2>You will be redirected to the home page shortly...</h2>
      </Fragment>
    );
  }
}

interface OwnDispatchProps {
  onDidMount: () => void;
}

interface State {}

interface OwnProps {}

const mapDispatchToProp: MapDispatchToProps<OwnDispatchProps, OwnProps> = (
  dispatch: ThunkDispatch<State, void, RouterAction>
) => ({
  onDidMount: () => {
    dispatch(push("/auth"));
  }
});

export default connect(
  null,
  mapDispatchToProp
)(EmailValidation);
