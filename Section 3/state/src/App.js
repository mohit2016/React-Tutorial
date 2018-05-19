import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={favColor : 'red'};
   
    setTimeout(() => {
      this.setState ({favColor : 'blue'});
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.state.favColor}
      </div>
    );
  }
}

export default App;
