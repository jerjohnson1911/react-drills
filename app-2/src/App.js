import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      gear: ['tent', 'sleeping bag', 'pad', 'hatchet', 'food']
    }
  }
  
  render() {
    let gearToDisplay = this.state.gear.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return <div className='App'>{gearToDisplay}</div>
  }

  }



export default App;
