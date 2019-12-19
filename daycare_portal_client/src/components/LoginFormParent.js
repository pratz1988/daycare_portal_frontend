import React, { Component } from "react";
import { Redirect } from "react-router";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Label
} from "semantic-ui-react";

class LoginFormParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      toMainPage: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirectToMainPage = this.redirectToMainPage.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    //UserId
    // const response = await axios.post("/teachers", ${userId});

    sessionStorage.setItem("parentId", this.state.userId);
    sessionStorage.setItem("password", this.state.password);

    this.props.setUserCategory("parent");

    this.setState({
      toMainPage: true
    });
    console.log("loggedin");
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  redirectToMainPage() {
    if (this.state.toMainPage) {
      return <Redirect to="/AfterLogin" />;
    }
  }

  render() {
    return (
      <>
        {this.redirectToMainPage()}
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Enter your ID"
                  id="userId"
                  onChange={this.handleChange}
                  value={this.state.userId}
                />
                {/* <Label basic color='red' pointing>
        Please enter a value
      </Label> */}
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />

                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={this.handleSubmit}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
export default LoginFormParent;
