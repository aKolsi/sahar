import * as React from "react";
import { AppHeaderDropdown } from "@coreui/react";
import { DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { IState } from "src/shared/store";
import * as Actions from "src/features/front/auth/actions";
import { ThunkDispatch } from "redux-thunk";

interface DispatchProps {
  onSubmit: () => void;
}

type Props = DispatchProps & TStateProps;
class HeaderProfile extends React.Component<Props> {
  render() {
    console.log(this.props);
    return (
      <AppHeaderDropdown direction="down">
        <DropdownToggle nav={true}>
          <i className="fa fa-user" />{" "}
          {this.props.currentUser === undefined
            ? ""
            : this.props.currentUser.email}
        </DropdownToggle>
        <DropdownMenu right={true} style={{ right: "auto" }}>
          <DropdownItem header={true} tag="div" className="text-center">
            <strong>Account</strong>
          </DropdownItem>
          <DropdownItem>
            <i className="fa fa-user" /> Profile
          </DropdownItem>
          <DropdownItem onClick={this.props.onSubmit}>
            {" "}
            <i className="fa fa-lock" />
            Logout
          </DropdownItem>
        </DropdownMenu>
      </AppHeaderDropdown>
    );
  }
}
interface TStateProps {
  currentUser: any;
}
interface TOwnProps {}
const mapStateToProp: MapStateToProps<TStateProps, TOwnProps, IState> = (
  state: IState
) => ({
  currentUser: state.auth.currentuser
});
const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (
  dispatch: ThunkDispatch<IState, void, Actions.All>
) => ({
  onSubmit: () => {
    dispatch(Actions.logout());
  }
});

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(HeaderProfile);
