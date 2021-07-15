import React,{ Component } from 'react'
import './App.css';

import Header from './Header'

class Intro extends Component{
  render(){
    return(
      <div>
        <p>Basic object of a changed function to class</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </div>
    )
  }
}


class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Intro />
      </div>
    );
  }
}

export default App;
