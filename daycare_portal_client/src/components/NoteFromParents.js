
import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Image, List, Transition } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const users = ['plz apply coconut oil for every 1 hr on his elbows', 'dont give milk to Shourya today', 'dont give to Dimpi milk toda', 'Carnky Today morning', 'Plz apply aquaphor', 'Sohan has diaperrash plz apply oil','Plz use big Jacket for Dimpi','Use Aquaphor for Sid']

export default class TransitionExampleGroup extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            items: users.slice(0, 6) ,
            allChildrenData: []
        }
    //    this.state.allChildrenData = this.props.allChildrenData
       console.log(this.state.allChildrenData);
    }
  

  handleAdd = () =>
    this.setState((prevState) => ({
      items: users.slice(0, prevState.items.length + 1),
    }))

  handleRemove = () =>
    this.setState((prevState) => ({ items: prevState.items.slice(0, -1) }))

  render() {
    const { items } = this.state

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
        <div className="noteMarginLeft">
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
          {items.map((item) => (
            <List.Item key={item}>
              <Image avatar src={`/images/avatar/small/${item}.jpg`} />
              {/* <span avatar>name</span> */} {""}{""}{""}{""}
              <List.Content header={_.startCase(item)} />
            </List.Item>
          ))}
        </Transition.Group>
        </div>
      </div>
    )
  }
}

// import React, { Component } from "react";


