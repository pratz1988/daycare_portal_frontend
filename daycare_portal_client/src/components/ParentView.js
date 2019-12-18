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
            <div className='bcImage imgDimn'> 
                <div>
                    <div class="ui pointing secondary menu">
                        <a class=" item">Home</a>
                        <a class="active item">For Parents</a>
                        <div class="right menu"><a class="item">logout</a></div>
                    </div>
                    {/* <div class="ui segment"><img src="/images/wireframe/media-paragraph.png" width="200px"/></div> */}
                </div>
                <div><br></br></div>
                <h1 className="activities">Activities</h1>
               <div class="ui grid">
                    <div class="four wide column">
                        <div class="ui fluid vertical huge tabular menu">
                            <a class="item">Monday</a>
                            <a class=" item">Tuesaday</a>
                            <a class=" active item">Wednesday</a>
                            <a class="item">Thursday</a>
                            <a class="  item">Friday</a>
                        </div>
                    </div>    
                    <div class="stretched ten wide column">
                        <div class="ui green segment ">
                        <div class="ui grid">
                            <div class="four wide column leftAlign mrgnLeft">
                                <p>ParentName :</p> 
                                <p>ChildName: </p>
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
                                {todayActivity.map(activity =>  (
                                    <div key={activity.id} >
                                        <p>  {activity.breakfast}</p>
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
               
            </div>
            </>
        ) 
    }

}
export default ParentView;