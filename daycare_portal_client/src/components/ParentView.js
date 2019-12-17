import React, {Component} from 'react';
import axios from 'axios';

class ParentView extends Component {
    constructor(props){
        super(props)
        this.state = {
            parentId: 1,
            childId: 0,
            parentName: '',
            childName: '',
            todayActivity: []
        }
    }
    //Getting ParentId who currently loggedin
    // async getParentId() {}

    componentDidMount() {
        this.getChildId();
    }
    async getChildId() {
        const response = await axios(`/parents/${this.state.parentId}`);
        const parentsData = response.data;
        this.setState({
            childId: parentsData.children[0].id,
            parentName: parentsData.parentName
        })
        console.log("data..."+parentsData.children[0].childName);
        console.log(this.state.parentName)

        ////// Calling getActivity() method ////////////
        this.getActivity();
    }
    async getActivity() {
        const response = await axios(`/children/${this.state.childId}`);
        const childActivityData = response.data;
        let activities = childActivityData.activities;
        // let today  = new Date();
        // console.log(activities[0].date)
        // let todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let todayDate  = '2019-12-20'
        let todayActivity =  activities.filter(function(activity){
            return  activity.date ===  todayDate
        });
        this.setState({
            childName: childActivityData.childName,
            todayActivity: todayActivity
        })
        console.log(this.state.todayActivity[0])
    }
    render() {
        const {parentName, childName, todayActivity} =  this.state
        return (
            <>
               <h1>Parent View</h1>
              <div>
                  <p>Name: {parentName} </p> 
                  <p>ChildName: {childName}</p>
                  {todayActivity.map(activity =>  (
                      <div key={activity.id}>
                        <p>Breakfast: {activity.breakfast}</p>
                        <p>MorningActivity: {activity.morningActivity}</p>
                        <p>Lunch: {activity.lunch}</p>
                        <p>NapStartTime: {activity.napStartTime}</p>
                        <p>NapEndTime: {activity.napEndTime}</p>
                        <p>AfternoonSnack: {activity.afternoonSnack}</p>
                        <p>AfternoonActivity: {activity.afternoonActivity}</p>
                    </div>
                  ))}
              </div>
            </>
        ) 
    }

}
export default ParentView;