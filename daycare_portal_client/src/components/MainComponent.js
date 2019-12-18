import React, { Component } from "react";
import ParentView from "./ParentView";
import EachChild from "./EachChild";
import Teacher from "./Teacher";

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
    } else {
      return (
        <>
          <EachChild />
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
    // const { loggedIn } = this.state;
    // let renderView;
    // if (loggedIn === "parent") {
    //   renderView = (
    //     <div className="App">
    //       {" "}
    //       <ParentView />{" "}
    //     </div>
    //   );
    // } else if (loggedIn === "teacher") {
    //   renderView = (
    //     <div>
    //       {" "}
    //       <EachChild />{" "}
    //     </div>
    //   );
    // }

    // // const renderView = loggedIn ?  <div className="App"> <ParentView /> </div>: <EachChild />
    // return <>{renderView}</>;
  }
}

export default MainComponent;
