import React, {Component} from 'react';
import MainComponent from './components/MainComponent'
import './App.css';

class App extends Component {
  constructor() {
    super()
  }
  render() {
      return (
        <div className="App">
          <MainComponent />
        </div>
      );
  }
}

export default App;
