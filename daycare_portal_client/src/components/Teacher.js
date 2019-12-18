import React, {Component} from 'react'
import axios from 'axios';

class Teacher extends Component {
    constructor(props){
        super(props)

        this.state = {
            breakfast: '',
            morningActivity: '',
            lunch: '',
            napStartTime: '',
            napEndTime: '',
            afternoonSnack: '',
            afternoonActivity: '',
            date: '',
            child_id: 1,
            teacher_id: 1,
            allChildIds: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
   
    //get TeacherId after Login
    // getTecaher()
    componentDidMount() {
        this.getAllChildIds();
    }
    //Get all Children Ids
    async getAllChildIds() {
        const response = await axios(`/children`);
        const childIds = response.data;
        const childrenIds = childIds.map((childId,index) => {   
          return childId.id;  
        })
        this.setState({
            allChildIds: childrenIds
        })    
        console.log("all child ids.."+this.state.allChildIds);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    async handleSubmit(event) {
        event.preventDefault();
        const formInputs = 
        {
            breakfast: this.state.breakfast,
            morningActivity: this.state.morningActivity,
            lunch: this.state.lunch,
            napStartTime: this.state.napStartTime,
            napEndTime: this.state.napStartTime,
            afternoonSnack: this.state.afternoonSnack,
            afternoonActivity: this.setState.afternoonActivity,
            date: this.state.date,
            child_id: this.props.selectedChild.id,
            teacher_id: this.state.teacher_id
        }
        console.log("formInputs..."+formInputs);
        const response = await axios.post("/activities", formInputs);
        this.setState( {
            breakfast: '',
            morningActivity: '',
            lunch: '',
            napStartTime: '',
            napEndTime: '',
            afternoonSnack: '',
            afternoonActivity: '',
            date: '',
            child_id: '',
            teacher_id: ''
        })
    }
   
    render() {
        return (
            <div>
            <h1>Activity Form</h1>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="breakfast">Breakfast: </label>
                    <input
                    type="text"
                    id="breakfast"
                    name="breakfast"
                    onChange={this.handleChange}
                    value={this.state.breakfast}
                    placeholder="add breakfast"
                    />
                </div><br></br>
                <div>
                    <label htmlFor="morningActivity">MorningActivity: </label>
                    <input
                    type="text"
                    id="morningActivity"
                    name="morningActivity"
                    onChange={this.handleChange}
                    value={this.state.morningActivity}
                    placeholder="add morningActivity"
                    />
                </div><br></br>
                <div>
                    <label htmlFor="lunch">Lunch: </label>
                    <input
                    type="text"
                    id="lunch"
                    name="lunch"
                    onChange={this.handleChange}
                    value={this.state.lunch}
                    placeholder="add lunch"
                    />
                </div><br></br>
                <div>
                    <label htmlFor="napStartTime">NapStartTime: </label>
                    <input
                    type="text"
                    id="napStartTime"
                    name="napStartTime"
                    onChange={this.handleChange}
                    value={this.state.napStartTime}
                    placeholder="add napStartTime"
                    />
                </div><br></br>
                <div>
                    <label htmlFor="napEndTime">NapEndTime: </label>
                    <input
                    type="text"
                    id="napEndTime"
                    name="napEndTime"
                    onChange={this.handleChange}
                    value={this.state.napEndTime}
                    placeholder="add napEndTime"
                    />
                </div><br></br>
                <div>
                    <label htmlFor="afternoonSnack">AfternoonSnack: </label>
                    <input
                    type="text"
                    id="afternoonSnack"
                    name="afternoonSnack"
                    onChange={this.handleChange}
                    value={this.state.afternoonSnack}
                    placeholder="add afternoonSnack"
                    />
                </div><br></br>
                <div>
                    <label htmlFor="afternoonActivity">AfternoonActivity: </label>
                    <input
                    type="text"
                    id="afternoonActivity"
                    name="afternoonActivity"
                    onChange={this.handleChange}
                    value={this.state.afternoonActivity}
                    placeholder="add afternoonActivity"
                    />
                </div><br></br>
                <div>
                    <label htmlFor="date">Date: </label>
                    <input
                    type="text"
                    id="date"
                    name="date"
                    onChange={this.handleChange}
                    value={this.state.date}
                    placeholder="add date"
                    />
                </div><br></br>
                <input type="submit" value="create new activity" />{""}
                <input type="submit" value="Edit" />{""}
                <input type="submit" value="Delete" />{""}
                <button class="ui yellow basic button">Yellow</button>
            </form>
            </div>
        )
    }
}
export default Teacher;