import React, {Component} from 'react';
import MainComponent from './components/MainComponent'
import HomePage from './components/HomePage'

// import bulma
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  toggleLogin() {
    this.setState((prevState, props) => {
      return { isLoggedIn: !prevState.isLoggedIn };
    });
  }
  render() {
    const renderView = this.state.isLoggedIn ?  <MainComponent /> : <HomePage />
      return (
        <>
        { renderView }
        </>
      ); 
  }
}

export default App;
