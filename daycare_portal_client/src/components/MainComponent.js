import React, {Component} from 'react'; 
import ParentView from './ParentView';
import EachChild from './EachChild'
import Teacher from './Teacher';

class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false
        }
    }



    render() {
        const {loggedIn} = this.state;
        const renderView = loggedIn ?  <div className="App"> <ParentView /> </div>: <EachChild />
        // if(loggedIn === 'Parent') {
        //     renderView = <ParentView />
        // }
        // elseif(loggedIn === 'Teacher') {
        //     renderView = <EachChild />
        // }

        return (     
            <> 
                {renderView}
            </>
        )
    }
}

export default MainComponent;