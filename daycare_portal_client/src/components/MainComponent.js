import React, {Component} from 'react'; 
import ParentView from './ParentView'
class MainComponent extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <>
            <h2>Main Component</h2>
            <ParentView />
            </>
        )
    }
}

export default MainComponent;