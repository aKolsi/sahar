import * as React from "react";

import { Component } from "react";
import axios from "axios";
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

const EmailLink = `http://localhost:3000/candidates/request-password-reset`;

interface ForgotMyPasswordProps {}

class Forgot extends Component<ForgotMyPasswordProps> {
  state = {
    email: "",
    error: "",
    res: ""
  };

  handleChange = (event: any) => {
    this.setState({ email: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    const data = {
      email: this.state.email
    };

    console.log("1", data);
    axios
      .post(EmailLink, { email: this.state.email })
      .then(res => {
        console.log(res.data);
        this.setState({
          res: `An email has been sent to this address ${this.state.email} `,
          error: ``
        });
      })
      .catch(err => {
        console.error(err.response.data.code);
        this.setState({
          error: err.response.data.code
        });
      });
  };

  render() {
    return (
      <div className="app  flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Forgot my password</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          invalid={Boolean(this.state.error)}
                          onChange={event => this.handleChange(event as any)}
                          name="email"
                          type="text"
                        />
                        {this.state.error && (
                          <FormFeedback tooltip={true}>
                            {this.state.error}
                          </FormFeedback>
                        )}
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            className="px-4"
                            type="submit"
                          >
                            Send Email
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
  }
}

export default Forgot;
