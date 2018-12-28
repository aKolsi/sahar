import * as React from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Row
} from "reactstrap";
import "./application.css";
import { StatelessComponent } from "react";
import * as Actions from "../actions";
import IApplicationCredentials, {
  validationSchema
} from "../../../../data/ApplicationCredential";
import { ThunkDispatch } from "redux-thunk";
import { connect, MapDispatchToProps } from "react-redux";
import {
  withFormik,
  FormikValues,
  FormikErrors,
  FormikProps,
  Field
} from "formik";
import { IState } from "src/shared/store";

interface DispatchProps {
  onSubmit: (
    ApplicationCredientials: IApplicationCredentials
  ) => Promise<FormikErrors<FormikValues>> | void;
}

type Props = DispatchProps & FormikProps<IApplicationCredentials>;

const Application: StatelessComponent<Props> = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}) => (
  <div className="app d-flex flex-row align-items-center">
    <Container>
      <Row className="justify-content-center">
        <Col md="9" lg="7" xl="6">
          <Card className="mx-4">
            <CardBody className="p-4">
              <Form onSubmit={handleSubmit}>
                <h1>Application</h1>
                <p className="text-muted">Answer this questions</p>
                <p>What is your company in 2–5 words?</p>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="far fa-lightbulb" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    placeholder="Answer...."
                    autoComplete="questionOne"
                    name="userName"
                    tag={Field}
                    invalid={Boolean(errors.questionOne && touched.questionOne)}
                    value={values.questionOne}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputGroup>
                <p>Why is now the time for your company to exist?</p>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="far fa-lightbulb" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    placeholder="Answer...."
                    autoComplete="questionTwo"
                    name="questionTwo"
                    tag={Field}
                    invalid={Boolean(errors.questionTwo && touched.questionTwo)}
                    value={values.questionTwo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputGroup>
                <p>
                  What do you love about your team, and why are you the ones to
                  solve this problem?
                </p>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="far fa-lightbulb" />
                    </InputGroupText>
                  </InputGroupAddon>

                  <Input
                    type="text"
                    placeholder="Answer...."
                    autoComplete="questionThree"
                    name="questionThree"
                    tag={Field}
                    invalid={Boolean(
                      errors.questionThree && touched.questionThree
                    )}
                    value={values.questionThree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputGroup>
                <p>
                  If you weren’t building your startup, what would you be doing?
                </p>
                <InputGroup className="mb-3 ">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="far fa-lightbulb" />
                    </InputGroupText>
                  </InputGroupAddon>

                  <Input
                    type="text"
                    placeholder="Answer...."
                    autoComplete="questionFour"
                    name="questionFour"
                    tag={Field}
                    invalid={Boolean(
                      errors.questionFour && touched.questionFour
                    )}
                    value={values.questionFour}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputGroup>
                <Button color="success">Submit Application</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);
const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (
  dispatch: ThunkDispatch<IState, void, Actions.ApplicationActions>
) => ({
  onSubmit: (IApplicationCredentials: IApplicationCredentials) => {
    dispatch(Actions.submitApplication(IApplicationCredentials));
  }
});

const ApplicationWithFormik = withFormik<
  DispatchProps,
  IApplicationCredentials
>({
  validationSchema,
  mapPropsToValues: () => ({
    questionOne: "",
    questionTwo: "",
    questionThree: "",
    questionFour: ""
  }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.onSubmit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(Application);

export default connect(
  null,
  mapDispatchToProps
)(ApplicationWithFormik);
