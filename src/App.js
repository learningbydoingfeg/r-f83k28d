import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    increment: 0
  }
    
  

handleClick = () => {
  this.setState({
    increment: this.state.increment + 1 
  })

}  


  render() {
    return (
      <div>
        <span className="value">{this.state.increment}</span>
        <button onClick={this.handleClick} id="inc">Incrementa</button>
      </div>
    );
  }
}

export default App;
