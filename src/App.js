import React,{ Component } from 'react'
import './App.css';

import Header from './Header'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Parent/>
      </div>
    );
  }
}

class Parent extends Component {
  render(){
    return(
      <div>
        <h2>Just some info</h2>
        <Cars  message="Cars are cool" model="Tesla Model X" coolcars={this.props.cars}/>
      </div>
    )
  }
}

Parent.defaultProps = {
  cars: ["Tesla", "Mazda", "Toyota", "BMW"]
}

class Cars extends Component {
  render() {
    console.log(this.props);
    return(
      <div>
        <h3>I am from car component</h3>
        <p>{this.props.message}</p>
        <p>{this.props.model}</p>
        <p>{this.props.coolcars.join()}</p>
      </div>
    )
  }
}

export default App;