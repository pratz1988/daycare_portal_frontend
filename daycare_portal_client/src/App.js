import React, { Component } from "react";
import MainComponent from "./components/MainComponent";
import HomePage from "./components/HomePage";
import LoginFormParent from "./components/LoginFormParent";
import LoginFormTeacher from "./components/LoginFormTeacher";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import ParentView from "./components/ParentView";

class App extends Component {
  constructor() {
    super();
    this.state = {
      homeButton: false,
      parentsButton: true,
      teachersButton: false,
      user_category: ""
    };
    this.homeButtonFalse = this.homeButtonFalse.bind(this);
    this.setUserCategory = this.setUserCategory.bind(this);
  }
  toggleLogin() {
    this.setState((prevState, props) => {
      return { isLoggedIn: !prevState.isLoggedIn };
    });
  }

  homeButtonFalse() {
    this.setState({
      homeButton: false
    });
  }

  setUserCategory(category) {
    this.setState({
      user_category: category
    });
  }

  render() {
    const { homeButton, parentsButton, teachersButton } = this.state;
    return (
      <Router>
        <div>
          <Route path="/" exact render={() => <HomePage />} />
          <Route
            path="/ForParents"
            render={() => (
              <div className="bcImage imgDimn">
                <LoginFormParent setUserCategory={this.setUserCategory} />
              </div>
            )}
          />
          <Route
            path="/ForTeachers"
            render={() => (
              <div className="bcImage imgDimn">
                <LoginFormTeacher setUserCategory={this.setUserCategory} />
              </div>
            )}
          />
          <Route
            path="/Main"
            render={() => (
              <MainComponent user_category={this.state.user_category} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;

// <Route path="/" render={() => <Menu />} />
