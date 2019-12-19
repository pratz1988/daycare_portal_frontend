import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import moment from "moment";

let base_url = "https://daycare-portal.herokuapp.com";

if (process.env.NODE_ENV === "development") {
  base_url = "http://localhost:3000";
}
class ParentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentId: 0,
      childId: 0,
      parentName: "",
      childName: "",
      todayActivity: [],
      mondaySelected: "active item",
      tuesdaySelected: "item",
      wednesdaySelected: "item",
      thursdaySelected: "item",
      fridaySelected: "item",
      datesOfWeek: []
    };
    this.setParent = this.setParent.bind(this);
    this.changeDay = this.changeDay.bind(this);
  }
  //Getting ParentId who currently loggedin
  // async getParentId() {}

  async componentDidMount() {
    var newDatesOfWeek = this.state.datesOfWeek;

    for (let x = 1; x <= 5; x++) {
      let date = moment()
        .day(x)
        .toDate();

      let formatDate =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

      console.log(formatDate);
      newDatesOfWeek.push(formatDate);
    }

    this.setState({
      datesOfWeek: newDatesOfWeek
    });

    console.log(sessionStorage.getItem("parentId"));
    await this.setParent();
    this.getChildId();
  }

  setParent() {
    if (sessionStorage.getItem("parentId")) {
      this.setState({
        parentId: sessionStorage.getItem("parentId")
      });
    } else {
    }
  }

  async getChildId() {
    const response = await axios(`${base_url}/parents/${this.state.parentId}`);
    const parentsData = response.data;
    this.setState({
      childId: parentsData.children[0].id,
      parentName: parentsData.parentName
    });
    console.log("data..." + parentsData.children[0].childName);
    console.log(this.state.parentName);

    ////// Calling getActivity() method ////////////
    let today = new Date();
    let todayDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    this.getActivity(today.getDay(), todayDate);
  }
  async getActivity(day, todayDate) {
    const response = await axios(`${base_url}/children/${this.state.childId}`);
    const childActivityData = response.data;
    let activities = childActivityData.activities;
    // let today = new Date();
    // console.log(activities[0].date)
    // let todayDate =
    //   today.getFullYear() +
    //   "-" +
    //   (today.getMonth() + 1) +
    //   "-" +
    //   today.getDate();
    // let todayDate = "2019-12-20";
    console.log(todayDate);
    let todayActivity = activities.filter(function(activity) {
      return activity.date === todayDate;
    });
    this.setState({
      childName: childActivityData.childName,
      todayActivity: todayActivity
    });
    console.log(this.state.todayActivity[0]);

    this.changeDay(day);
  }

  changeDay(day) {
    if (day === "Monday" || day === 1) {
      this.setState({
        mondaySelected: "active item",
        tuesdaySelected: "item",
        wednesdaySelected: "item",
        thursdaySelected: "item",
        fridaySelected: "item"
      });
    } else if (day === "Tuesday" || day === 2) {
      this.setState({
        mondaySelected: "item",
        tuesdaySelected: "active item",
        wednesdaySelected: "item",
        thursdaySelected: "item",
        fridaySelected: "item"
      });
    } else if (day === "Wednesday" || day === 3) {
      this.setState({
        mondaySelected: "item",
        tuesdaySelected: "item",
        wednesdaySelected: "active item",
        thursdaySelected: "item",
        fridaySelected: "item"
      });
    } else if (day === "Thursday" || day === 4) {
      this.setState({
        mondaySelected: "item",
        tuesdaySelected: "item",
        wednesdaySelected: "item",
        thursdaySelected: "active item",
        fridaySelected: "item"
      });
    } else if (day === "Friday" || day === 5) {
      this.setState({
        mondaySelected: "item",
        tuesdaySelected: "item",
        wednesdaySelected: "item",
        thursdaySelected: "item",
        fridaySelected: "active item"
      });
    }
  }

  render() {
    const { parentName, childName, todayActivity } = this.state;
    return (
      <>
        <div className="bcImgParent imgDimn">
          <div>
            <div class="ui pointing secondary menu">
              <Link to="/">
                <a class=" item">Home</a>
              </Link>
              <a class="active item">For Parents</a>
              <div class="right menu">
                <a class="item">logout</a>
              </div>
            </div>
            {/* <div class="ui segment"><img src="/images/wireframe/media-paragraph.png" width="200px"/></div> */}
          </div>
          <div>
            <br></br>
          </div>
          <h1 className="activities">Activities</h1>
          <div class="ui grid">
            <div class="four wide column">
              <div class="ui fluid vertical huge tabular menu">
                <a
                  class={this.state.mondaySelected}
                  onClick={() => {
                    this.getActivity("Monday", this.state.datesOfWeek[0]);
                  }}
                >
                  Monday
                </a>
                <a
                  class={this.state.tuesdaySelected}
                  onClick={() => {
                    this.getActivity("Tuesday", this.state.datesOfWeek[1]);
                  }}
                >
                  Tuesaday
                </a>
                <a
                  class={this.state.wednesdaySelected}
                  onClick={() => {
                    this.getActivity("Wednesday", this.state.datesOfWeek[2]);
                  }}
                >
                  Wednesday
                </a>

                <a
                  class={this.state.thursdaySelected}
                  onClick={() => {
                    this.getActivity("Thursday", this.state.datesOfWeek[3]);
                  }}
                >
                  Thursday
                </a>

                <a
                  class={this.state.fridaySelected}
                  onClick={() => {
                    this.getActivity("Friday", this.state.datesOfWeek[4]);
                  }}
                >
                  Friday
                </a>
              </div>
            </div>
            <div class="stretched ten wide column">
              <div class="ui green segment ">
                <div class="ui grid">
                  <div class="four wide column leftAlign mrgnLeft">
                    <p>ParentName :</p>
                    <p>ChildName: </p>
                    <p>Date: </p>
                    <p> Breakfast: </p>
                    <p>MorningActivity: </p>
                    <p>Lunch: </p>
                    <p>NapStartTime: </p>
                    <p>NapEndTime: </p>
                    <p>AfternoonSnack: </p>
                    <p>AfternoonActivity: </p>
                  </div>
                  <div class="six wide column leftAlign mrgnRight">
                    <p> {parentName} </p>
                    <p>{childName}</p>
                    {todayActivity.map(activity => (
                      <div key={activity.id}>
                         <p> {activity.date}</p>
                        <p> {activity.breakfast}</p>
                        <p>{activity.morningActivity}</p>
                        <p> {activity.lunch}</p>
                        <p>{activity.napStartTime}</p>
                        <p> {activity.napEndTime}</p>
                        <p> {activity.afternoonSnack}</p>
                        <p>{activity.afternoonActivity}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <p>ParentName: {parentName} </p> 
                            <p>ChildName: {childName}</p>
                            {todayActivity.map(activity =>  (
                                <div key={activity.id} >
                                    <p> Breakfast: {activity.breakfast}</p>
                                    <p>MorningActivity: {activity.morningActivity}</p>
                                    <p>Lunch: {activity.lunch}</p>
                                    <p>NapStartTime: {activity.napStartTime}</p>
                                    <p>NapEndTime: {activity.napEndTime}</p>
                                    <p>AfternoonSnack: {activity.afternoonSnack}</p>
                                    <p>AfternoonActivity: {activity.afternoonActivity}</p>
                                </div> 
                            ))}*/}
              </div>
            </div>
          </div>

          {/* <div>  <br></br>
            <form class="ui form">
            <div class="equal width fields">
            <div class="field">
              <label>About</label>
              <textarea placeholder="Tell us more about you..." rows="3"></textarea>
            </div>
          
            <div class="field"><button class="ui button">Submit</button></div>
            </div>
            </form>
          </div> */}
        </div>
      </>
    );
  }
}
export default ParentView;
