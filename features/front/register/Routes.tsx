import { StatelessComponent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Register from "./components/Register";
import verify from "./components/VerfiyEmail";
import EmailValidation from "./components/EmailValidation";
import Forgotmypassword from "../auth/components/Forgotmypassword";
import ResetPassword from "../reset password/Components/ResetPassword";
import * as React from "react";
import Auth from "../../front/auth/components/Auth";
import Application from "../application/components/Application";
import Profile from "../profile/components/Profile";
import Acceptation from "../application/components/Acceptation";

const redirectToAuth = () => <Redirect to="/auth" />;

const AuthRoutes: StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/auth/register" component={Register} />
    <Route exact={true} path="/auth/verify" component={verify} />
    <Route exact={true} path="/auth/validate" component={EmailValidation} />
    <Route exact={true} path="/auth/forgot" component={Forgotmypassword} />
    <Route exact={true} path="/auth/reset" component={ResetPassword} />
    <Route exact={true} path="/auth" component={Auth} />
    <Route exact={true} path="/auth/appli" component={Application} />
    <Route
      exact={true}
      path="/auth/appli/acceptation"
      component={Acceptation}
    />
    <Route
      path="/auth/profile"
      render={() => <Profile onSubmit={value => console.log(value)} />}
    />
    <Route render={redirectToAuth} />
  </Switch>
);

export default AuthRoutes;
