import React,{ Component } from 'react'
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render(){
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    )
  }
}


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
