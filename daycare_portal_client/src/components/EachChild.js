import React, {Component} from 'react'
import axios from 'axios';
import Teacher from './Teacher';

class EachChild extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentChildId: 0,
            allChildrenNames: [],
            clickedOnChildName: false,
            selectedChild: {}
        }
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
        })    
        console.log("all child data..",this.state.allChildrenNames);
    }

  async onClickChildName(childData) {
    
      await this.setState({ 
            clickedOnChildName: true,
            selectedChild: childData        
        })
      await console.log(this.state.selectedChild);
        
    }
    render(){ 
        const {clickedOnChildName, selectedChild} = this.state;
        const renderView = clickedOnChildName ? <Teacher selectedChild={selectedChild}/> : '';
        return (
            <div>
                <h1>Each Child</h1>         
                   {
                    this.state.allChildrenNames.map((childrenData,index) => {
                      return(  <div key={childrenData.id}>
                        <h4>
                         <a onClick={() => this.onClickChildName(childrenData)}>{childrenData.childName}</a>
                        </h4>
                        </div>
                      )
                    })
                    }
                    
                    <span className="App">
                    {renderView}
                </span>          
            </div>
        )
    }
}

export default EachChild