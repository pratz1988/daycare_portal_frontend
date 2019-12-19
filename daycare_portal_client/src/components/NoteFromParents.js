// import React, { Component } from "react";


// class NoteFromParents extends Component {
//     constructor(props){
//         super(props)
//     }
//     render() {
//         return(
//             <div>
//                 <div>
//                 <div class="ui buttons">
//                     <button class="ui icon button"><i aria-hidden="true" class="minus icon"></i></button>
//                     <button class="ui icon button"><i aria-hidden="true" class="plus icon"></i></button>
//                 </div>
//                 <div role="list" class="ui huge divided middle aligned list">
//                     <div role="listitem" class="item fade visible transition">
//                     <img src="/images/avatar/small/ade.jpg" class="ui avatar image" />
//                     <div class="content"><div class="header">Ade</div></div>
//                     </div>
//                     <div role="listitem" class="item fade visible transition">
//                     <img src="/images/avatar/small/chris.jpg" class="ui avatar image" />
//                     <div class="content"><div class="header">Chris</div></div>
//                     </div>
//                     <div role="listitem" class="item fade visible transition">
//                     <img src="/images/avatar/small/christian.jpg" class="ui avatar image" />
//                     <div class="content"><div class="header">Christian</div></div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         ) 
//     }
// }
// export default NoteFromParents;

import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Image, List, Transition } from 'semantic-ui-react'

const users = ['ade', 'chris', 'christian', 'daniel', 'elliot', 'helen']

export default class TransitionExampleGroup extends Component {

    constructor(props) {
        super(props)
        this.state = { items: users.slice(0, 3) }
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
      <div>
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
              {/* <span avatar>name</span> */}
              <List.Content header={_.startCase(item)} />
            </List.Item>
          ))}
        </Transition.Group>
      </div>
    )
  }
}