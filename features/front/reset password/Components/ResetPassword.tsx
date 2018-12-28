import * as React from "react";
import { StatelessComponent } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  FormFeedback
} from "reactstrap";
import IResetPasswordCredentials, {
  validationSchema
} from "../../../../data/RestPasswordCredential";
import {
  withFormik,
  FormikValues,
  FormikErrors,
  FormikProps,
  Field
} from "formik";
import * as Actions from "../actions";
import { MapDispatchToProps, connect } from "react-redux";
import { IState } from "src/shared/store";
import { ThunkDispatch } from "redux-thunk";
interface DispatchProps {
  onSubmit: (
    resetPasswordCredientials: IResetPasswordCredentials
  ) => Promise<FormikErrors<FormikValues>> | void;
}

type Props = DispatchProps & FormikProps<IResetPasswordCredentials>;
const ResetPassword: StatelessComponent<Props> = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}) => (
  <div className="app  flex-row align-items-center">
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
          <CardGroup>
            <Card className="p-4">
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <h1>Reset Password</h1>
                  <p className="text-muted">Enter your new password</p>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      tag={Field}
                      invalid={Boolean(errors.password && touched.password)}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      type="password"
                      placeholder="password"
                      autoComplete="password"
                    />
                    <FormFeedback tooltip={true}>
                      {errors.confirmPassword}
                    </FormFeedback>
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      autoComplete="Confirm-password"
                    />
                  </InputGroup>
                  <Row>
                    <Col xs="6">
                      <Button color="primary" className="px-4" type="submit">
                        Confirm
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  </div>
);
const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (
  dispatch: ThunkDispatch<IState, void, Actions.All>
) => ({
  onSubmit: (ILoginCredentials: IResetPasswordCredentials) => {
    dispatch(Actions.ResetPassword(ILoginCredentials));
  }
});
const ResetPasswordWithFormik = withFormik<
  DispatchProps,
  IResetPasswordCredentials
>({
  validationSchema,
  mapPropsToValues: () => ({ password: "", confirmPassword: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.onSubmit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(ResetPassword);

export default connect(
  null,
  mapDispatchToProps
)(ResetPasswordWithFormik);
