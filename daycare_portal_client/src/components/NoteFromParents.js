
import _ from 'lodash'
import React, { Component } from 'react'
import axios from "axios";
import { Button, Image, List, Transition } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let base_url = "https://daycare-portal.herokuapp.com";

if (process.env.NODE_ENV === "development") {
  base_url = "http://localhost:3000";
}

const users = ['plz apply coconut oil for every 1 hr on his elbows for vivan', 'dont give milk to Shourya today', 'dont give to Dimpi milk toda', 'Sohan is Carnky Today morning', 'Plz apply aquaphor for Ishi', 'Dheeru has diaperrash plz apply oil','Plz use big Jacket for Dimpi','Use Aquaphor for Sid']
const imgs = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5iCJgOgctuuVACE9BtuocPEzKEaOaBO6Mpc6wxjQyvTMlMau&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4HWmym_MtNbfavFqHumIag0L3Iq-MW3QWvCADoSP-CICgEhAjw&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQN2h-FznabevY6dYjYoC2nhszaU4N1qEIQyh85cJVW3Ns5DmG&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjXM5aLx8KmTMIbFaRDSos6BzmUd2yBMbUVeCwtuCqXMHI8rw&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA64pBFPI52SUcCRGfZDSyvg04XHKt27A8-tc5NjqtAh8mjK5q&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLSO-UKfjAiO9DNNjntRNCS5i5PRgi32D9HmulGdEE-4D4k4xpbg&s',''];
export default class TransitionExampleGroup extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            items: users.slice(0, 6) ,
            images: imgs,
            allChildrenNames: [],
            notes:  []
        }
    //    this.state.allChildrenData = this.props.allChildrenData
    this.getAllChildrenNmaes = this.getAllChildrenNmaes.bind(this);
    }
  
    componentDidMount() {
        this.getAllChildrenNmaes();
      }

    //Get all Children Names & All notes from parents
  async getAllChildrenNmaes() {
    const response = await axios(`${base_url}/children`);
    let childrenData = response.data;
    this.setState({
      allChildrenNames: childrenData
    });
    this.state.allChildrenNames.map((note,index)  =>  {
        this.state.notes  =  note.noteFromParent
    })
    
    // this.props.getNoteFromParents(childrenData);
    console.log("all child data..", this.state.allChildrenNames);
    console.log("all child data..", this.state.allChildrenNames[0].childName);
  }

  handleAdd = () =>
    this.setState((prevState) => ({
      items: users.slice(0, prevState.items.length + 1),
    }))

  handleRemove = () =>
    this.setState((prevState) => ({ items: prevState.items.slice(0, -1) }))

  render() {
    const { items,images } = this.state

    return (
      <div >
           <div class="ui pointing secondary menu ">
               
            <Link to="/">
                <a class=" item">Home</a>
                </Link>
                <Link to="/ForTeachers"><a class=" item">For Teachers</a></Link>
                <Link to="/Note">
                <a class="active item">NoteFromParents</a>
                </Link>
                <div class="right menu">
                <Link to="/"> <a class="item">logout</a></Link>
                </div>
                
            </div>
        <div className="noteMarginLeft ">
        <div class="ui four  column segment">
        <Button.Group>
          <Button
            disabled={items.length === 0}
            icon='minus'
            onClick={this.handleRemove}
          />
          <Button
            disabled={items.length === users.length}
            icon='plus'
            onClick={this.handleAdd}
          />
        </Button.Group>

        <Transition.Group
          as={List}
          duration={200}
          divided
          size='huge'
          verticalAlign='middle'
        >
          {items.map((item,index) => (
            <List.Item key={item}>
              <Image avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5iCJgOgctuuVACE9BtuocPEzKEaOaBO6Mpc6wxjQyvTMlMau&s" />
              {/* <span avatar>name</span> */} {""}{""}{""}{""}
              <List.Content header={_.startCase(item)} />
            </List.Item>
          ))}
        </Transition.Group>
        </div>
      </div>
      </div>
    )
  }
}

// import React, { Component } from "react";


