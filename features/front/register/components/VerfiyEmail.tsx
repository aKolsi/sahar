import * as React from "react";

import { Component } from "react";
import { Fragment } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RouterAction, push } from "react-router-redux";

interface ForgotMyPasswordProps {
  onDidMount: () => void;
}

class Verify extends Component<ForgotMyPasswordProps> {
  componentDidMount() {
    setTimeout(this.props.onDidMount, 10000);
  }
  render() {
    return (
      <Fragment>
        <h2>
          An Email has been sent to your email account Please Verify Your Email
          Acount{" "}
        </h2>
        <br />
        <h2>You will be redirected to the login page shortly</h2>
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
)(Verify);
