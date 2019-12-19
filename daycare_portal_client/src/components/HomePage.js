import React, { Component } from "react";
import LoginForm from "./LoginFormParent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeButton: false,
      parentsButton: false,
      teachersButton: false
    };
    this.homeButtonTrue = this.homeButtonTrue.bind(this);
    this.parentsButtonTrue = this.parentsButtonTrue.bind(this);
    this.teachersButtonTrue = this.teachersButtonTrue.bind(this);
  }

  homeButtonTrue() {
    this.setState({
      homeButton: true,
      parentsButton: false,
      teachersButton: false
    });
  }
  parentsButtonTrue() {
    console.log("parents button clicked");
    this.setState({
      parentsButton: true,
      homeButton: false,
      teachersButton: false
    });
  }
  teachersButtonTrue() {
    this.setState({
      teachersButton: true,
      parentsButton: false,
      homeButton: false
    });
  }

  render() {
    const { homeButton, parentsButton, teachersButton } = this.state;

    return (
      <div>
        <div className="bcImage imgDimn ">
          <div>
            <div class="ui pointing secondary menu">
              <Link to="/">
                <a class="active item">Home</a>
              </Link>
              <Link to="/ForParents">
                <a class="item">For Parents</a>
              </Link>
              <Link to="/ForTeachers">
                <a class="item">For Teachers</a>
              </Link>
              <div class="right menu">
                <a class="item">Login</a>
              </div>
            </div>
          </div>

          <div className="dayContainer headerFont">
            <div class="ui four  column segment">
              <h1> Daycare portal </h1>
              <h2> An app for parents and teachers </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
