import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      filterString: '',
      cars: ['corvette', 'cybertruck', '911', 'daytona', 'r34']
    }
  }

  handleChange(filter) {
    this.setState({ filterString: filter })
  }

  render(){
    let carsToDisplay = this.state.cars
    .filter(element => {
      return element.includes(this.state.filterString)
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })

    return (
      <div className='App'>
        <input onChange={e => this.handleChange(e.target.value)} type='text' />
        {carsToDisplay} 
      </div>
    )
  }
}

export default App;
