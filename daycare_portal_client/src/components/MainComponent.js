import React, { Component } from "react";
import ParentView from "./ParentView";
import EachChild from "./EachChild";
import Teacher from "./Teacher";
import { Redirect } from "react-router";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: ""
    };
    this.setView = this.setView.bind(this);
  }

  setView() {
    if (this.props.user_category === "parent") {
      return (
        <>
          <ParentView />
        </>
      );
    } else if (this.props.user_category === "teacher") {
      return (
        <>
          <EachChild />
        </>
      );
    } else {
      return (
        <>
          <Redirect to="/" />
        </>
      );
    }
  }

  render() {
    return (
      <>
        <div>{this.setView()}</div>
      </>
    );
  }
}

export default MainComponent;
