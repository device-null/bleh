
'use strict';

import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Form,
    FormGroup,
    Input,
    Label,
    FormText,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

import AppContext from "../context/appContext";

class LoginPage extends React.PureComponent {
  render() {
    const disStyle = {
        background: 'pink',
    };
      return (
        <AppContext.Consumer>
        {app => (
          <Container style={disStyle}>
        <Row>
            <Col>
                <h1>Login or Create account</h1>
            </Col>
        </Row>
        <Row>
            <Form>
              <FormGroup row>
                <Label for="exampleEmail" sm={4}>Email</Label>
                <Col sm={8}>
                  <Input type="username" name="username" id="loginUsername" placeholder={app.state.user.id} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={4}>Password</Label>
                <Col sm={8}>
                  <Input type="password" name="password" id="loginPassword" placeholder="password placeholder" onChange={app.setUser}/>
                </Col>
              </FormGroup>
              <Button
                  tag="a"
                  color="success"
                  size="large"
                  href="#"
                  onClick={app.attemptLogin}
              >
                  Login
              </Button>
              <Button
                  tag="a"
                  color="primary"
                  size="large"
                  href="#"
              >
                  Create account
              </Button>
            </Form>
        </Row>
        </Container>
        )}
        </AppContext.Consumer>
      );
  }
}

export default LoginPage;
