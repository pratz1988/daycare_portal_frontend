import React, {Component} from 'react';
import axios from 'axios'
class ParentView extends Component {
    constructor(props){
        super(props)
        this.state = {
            parentId: 1,
            childId: 0
        }
    }
    //Getting ParentId who currently loggedin
    // async getParentId() {}
    componentDidMount() {
        this.getChildId();
        this.getActivity();
    }
    async getChildId() {
        const response = await axios(`/parents/${this.state.parentId}`);
        const parentsData = response.data;
        this.setState({
            childId: parentsData.children[0].id
        })
        console.log("data..."+parentsData.children[0].childName);
        console.log(this.state.childId)
    }
    async getActivity() {
        console.log('childId..'+this.state.childId);
        // const response = await axios('/children/${this.state.childId}');
        // const childActivityData = response.data;
        // console.log(childActivityData.activities[0])
    }

   
    render() {
        return (
            <>
               <h1>Parent View</h1>
            </>
        ) 
    }

}
export default ParentView;