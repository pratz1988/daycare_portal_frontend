import React, {Component} from 'react';
import MainComponent from './components/MainComponent';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';

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
    const renderView = this.state.isLoggedIn ?  <HomePage /> : <diV className='bcImage imgDimn' ><LoginForm /></diV>
      return (
        <>
            
        { renderView }
  
        </>
      ); 
  }
}

export default App;
