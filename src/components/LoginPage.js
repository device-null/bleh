
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

import {UserContext} from './User.js'

class LoginPage extends React.PureComponent {
  render() {
    const disStyle = {
        background: 'pink',
    };
      return (
        <UserContext.Consumer>
        {user => (
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
                <Input type="email" name="email" id="exampleEmail" placeholder={user} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={4}>Password</Label>
              <Col sm={8}>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </Col>
            </FormGroup>
            <Button
                tag="a"
                color="success"
                size="large"
                href="http://reactstrap.github.io"
                target="_blank"
            >
                Login
            </Button>
            <Button
                tag="a"
                color="primary"
                size="large"
                href="http://reactstrap.github.io"
                target="_blank"
            >
                Create account
            </Button>
          </Form>
      </Row>
      </Container>
      )}
      </UserContext.Consumer>
      );
  }
}

export default LoginPage;
