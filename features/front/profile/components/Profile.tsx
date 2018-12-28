import * as React from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Row
} from "reactstrap";
import IProfileCredentials, {
  validationSchema
} from "../../../../data/ProfileCredential";
import { StatelessComponent } from "react";
import {
  withFormik,
  FormikValues,
  FormikErrors,
  FormikProps,
  Field
} from "formik";
import "./profile.css";
interface DispatchProps {
  onSubmit: (
    profileCredientials: IProfileCredentials
  ) => Promise<FormikErrors<FormikValues>> | void;
}
type Props = DispatchProps & FormikProps<IProfileCredentials>;
const Profile: StatelessComponent<Props> = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}) => (
  <div className="container-fluid my-register-row">
    <Row className="my-container-p">
      <Col md="5" lg="4" xl="5" className="my-col-form-quote">
        <h1 className="my-col-form-title">
          There are no secrets to{" "}
          <span className="succes text-focus-in">success...</span>
        </h1>
      </Col>
      <Col md="7" lg="7" xl="6">
        <Card className="mx-4 my-card-container">
          <CardBody className="p-4 my-card-body text-focus-in">
            <Form onSubmit={handleSubmit}>
              <p className="text-mute">Create your account</p>
              <div className="avatar">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Card image cap"
                  className="avatar-img"
                />
              </div>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-user" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Picture"
                  autoComplete="picture"
                  name="picture"
                  tag={Field}
                  invalid={Boolean(errors.picture && touched.picture)}
                  value={values.picture}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-user" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="First Name"
                  autoComplete="firstName"
                  name="firstName"
                  tag={Field}
                  invalid={Boolean(errors.firstName && touched.firstName)}
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-user" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Last Name"
                  autoComplete="lastName"
                  name="lastName"
                  tag={Field}
                  invalid={Boolean(errors.lastName && touched.lastName)}
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Email"
                  autoComplete="email"
                  name="email"
                  tag={Field}
                  invalid={Boolean(errors.email && touched.email)}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-id-card-o" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="CIN"
                  autoComplete="cin"
                  name="cin"
                  tag={Field}
                  invalid={Boolean(errors.cin && touched.cin)}
                  value={values.cin}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-lock" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  name="password"
                  tag={Field}
                  invalid={Boolean(errors.password && touched.password)}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-lock" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  placeholder="Repeat password"
                  autoComplete="new-password"
                  name="confirmPassword"
                  tag={Field}
                  invalid={Boolean(
                    errors.confirmPassword && touched.confirmPassword
                  )}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <Button className="submit-form">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

const ProfileWithFormik = withFormik<DispatchProps, IProfileCredentials>({
  validationSchema,
  mapPropsToValues: () => ({
    picture: "",
    firstName: "",
    lastName: "",
    email: "",
    cin: 0,
    password: "",
    confirmPassword: ""
  }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.onSubmit(values);
    console.log(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(Profile);

export default ProfileWithFormik;
