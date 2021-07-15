import React,{ Component } from 'react'
import './App.css';

import Header from './Header'
import Intro from './Intro'

class App extends Component {

  sayHello = (name) => {
    return "Hello " + name
  }

  constructor(props) {
    super(props);
    this.name = "malaika"
    this.state = {}
  }

  render(){
    const name = "Aime"
    return (
      <div className="App">
        <h2>Just some sample data : { this.name }</h2>
      </div>
    );
  }
}

export default App;