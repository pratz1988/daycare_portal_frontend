import React, {Component} from 'react';
import MainComponent from './components/MainComponent';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';

// import bulma
import './App.css';
import ParentView from './components/ParentView';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }
  toggleLogin() {
    this.setState((prevState, props) => {
      return { isLoggedIn: !prevState.isLoggedIn };
    });
  }
  render() {
    const renderView = this.state.isLoggedIn ?  <MainComponent /> : <div className='bcImage imgDimn'><LoginForm /></div>
      return (
        <>
            
        { renderView }
  
        </>
      ); 
  }
}

export default App;
