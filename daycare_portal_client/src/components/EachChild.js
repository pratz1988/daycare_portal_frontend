import React, { Component } from "react";
import axios from "axios";
import Teacher from "./Teacher";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ChildName from "./ChildName";

let base_url = "https://daycare-portal.herokuapp.com";

if (process.env.NODE_ENV === "development") {
  base_url = "http://localhost:3000";
}

class EachChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChildId: 0,
      allChildrenNames: [],
      clickedOnChildName: false,
      selectedChild: {},
      toggleColor: "green"
    };
    this.onClickChildName = this.onClickChildName.bind(this);
    this.getAllChildrenNmaes = this.getAllChildrenNmaes.bind(this);
  }
  componentDidMount() {
    this.getAllChildrenNmaes();
  }
  //Get all Children Names
  async getAllChildrenNmaes() {
    const response = await axios(`${base_url}/children`);
    const childrenData = response.data;
    this.setState({
      allChildrenNames: childrenData
    });
    // this.props.getNoteFromParents(childrenData);
    console.log("all child data..", this.state.allChildrenNames);
  }

  async onClickChildName(childData) {
    await this.setState({
      clickedOnChildName: true,
      selectedChild: childData
    });
    await console.log(this.state.selectedChild);
  }

  render() {
    const { clickedOnChildName, selectedChild } = this.state;
    // const renderView = clickedOnChildName ? <Teacher selectedChild={selectedChild}/> : '';
    return (
      <>
        <div className=" bcImag imgDim ">
          <div class="ui pointing secondary menu">
            <Link to="/">
              <a class=" item">Home</a>
            </Link>
            <a class="active item">For Teachers</a>
            <Link to="/Note">
              <a class="item">NoteFromParents</a>
            </Link>
            <div class="right menu">
            <Link to="/"> <a class="item">logout</a></Link>
            </div>
          </div>
          <div><br></br></div>
          <div class="ui centered three column grid">
            <div class="column">
              <h3>Activity Form</h3>
              {this.state.clickedOnChildName ? (
                <div class="ui segment ">
                  <div class="ten wide">
                    <Teacher selectedChild={selectedChild} />
                  </div>
                </div>
              ) : (
                ""
              )}{" "}
              {/* condition ends here */}
              <div class="ui left rail">
                <div>
                  <br></br>
                </div>
                <div>
                  <br></br>
                </div>

                {/* Left segment */}
                <div class="">
                  <div></div>

                  <div class="ui sticky">
                    <div class="ui divided items">
                      {this.state.allChildrenNames.map(
                        (childrenData, index) => {
                          return (
                            <div class=" item" key={childrenData.id}>
                              <div class="ui tiny image"></div>
                              <div class="content ">
                                <div>
                                  <ChildName
                                    childrenData={childrenData}
                                    onClickChildName={this.onClickChildName}
                                  />
                                  {/* <a
                                    class={
                                      childrenData.id ===
                                      this.state.selectedChild.id
                                        ? "header active item redName"
                                        : "header active item greenName"
                                    }
                                    onClick={() =>
                                      this.onClickChildName(childrenData)
                                    }
                                  >
                                    {childrenData.childName}
                                  </a> */}
                                  {/* <div class="meta">Today Activities</div> */}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Left segment End*/}
              {/* </div> */}
            </div>
          </div>

          {/* {this.state.allChildrenNames.map((childrenData,index) => {
                    return(  <div key={childrenData.id}>
                        <a onClick={() => this.onClickChildName(childrenData)}>{childrenData.childName}</a>
                    </div>
                    )
                })}     */}
        </div>

        {/* Mani Div Ends here */}

 
       

        {/* hide /show
<div>
  <button class="ui button">Hide</button>
  <div class="ui hidden divider"></div>
  <img
    src="https://react.semantic-ui.com/images/leaves/1.png"
    class="ui small image scale visible transition"
  />
</div>


*/}
      </>
    );
  }
}

export default EachChild;
