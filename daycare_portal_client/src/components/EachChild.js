import React, { Component } from "react";
import axios from "axios";
import Teacher from "./Teacher";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class EachChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChildId: 0,
      allChildrenNames: [],
      clickedOnChildName: false,
      selectedChild: {}
    };
    this.onClickChildName = this.onClickChildName.bind(this);
    this.getAllChildrenNmaes = this.getAllChildrenNmaes.bind(this);
  }
  componentDidMount() {
    this.getAllChildrenNmaes();
  }
  //Get all Children Names
  async getAllChildrenNmaes() {
    const response = await axios(`/children`);
    const childrenData = response.data;
    this.setState({
      allChildrenNames: childrenData
    });
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
        <div className=" bcImag imgDimn ">
          <div class="ui pointing secondary menu">
            <Link to="/">
              <a class=" item">Home</a>
            </Link>
            <a class="active item">For Teachers</a>
            <Link to="/Note">
              <a class="item">NoteFromParents</a>
            </Link>
            <div class="right menu">
              <a class="item">logout</a>
            </div>
          </div>

          <div class="ui centered three column grid">
            <div class="column">
           
              <h3>Activity Form</h3>
              
              {this.state.clickedOnChildName ? (
                <div class="ui segment ">
                 <div class= "ten wide" >
                  <Teacher selectedChild={selectedChild} />
                </div>
                </div>
              ) : (
                ""
              )}{" "}
              {/* condition ends here */}
              <div class="ui left rail">
                <div><br></br></div>
                <div><br></br></div>
              
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
                                  
                                  <a
                                    class="header active item"
                                    onClick={() =>
                                      this.onClickChildName(childrenData)
                                    }
                                  >
                                    {childrenData.childName}
                                  </a>
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

        {/* 
<br></br>
<div class="ui centered three column grid">
  <div class="column">
    <div class="ui  segment">
      <p> fjkergnre</p>
      <p> fjkergnre</p>
      <p> fjkergnre</p>
      <p> fjkergnre</p>
      <p> fjkergnre</p>

      <div class="ui left rail">
        <div class="">
          <div></div>
          <div class="ui sticky">
            <div class="ui divided items">
              
              <div class="item">
                <div class="ui tiny image"></div>
                <div class="content">
                  <a class="header">Vivan</a>
                  <div class="meta">Today Activities</div>
                </div>
              </div>
              <div class="item">
                <div class="ui tiny image"></div>
                <div class="content">
                  <a class="header">Followup Article</a>
                  
                </div>
              </div>
              <div class="item">
                <div class="ui tiny image"></div>
                <div class="content">
                  <a class="header">Followup Article</a>
                  <div class="meta">By Author</div>
                </div>
              </div>
              <div class="item">
                <div class="ui tiny image"></div>
                <div class="content">
                  <a class="header">Followup Article</a>
                  <div class="meta">By Author</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            <div class="ui right rail">
                 <div class="">
                <div></div>
                <div class="ui sticky">
                    <h3 class="ui header">Stuck Content</h3>
                    <img src="/images/wireframe/image.png" class="ui image" />
                </div>
                </div> 
            </div>
    </div>
  </div>
</div> */}

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
