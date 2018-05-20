// First Method is Inline
// Second Method is Bond Function. a User Defined Func. is associated with event

import React, { Component } from 'react';


class ClickExample extends Component {
constructor(props){
    super(props);
    this.state = {name : "mohit"};
    //handleclick with get context of ClickExample without it , context is changed.
    this.handleClick = this.handleClick.bind(this); 

}

handleClick(e){
    this.setState((prevState, props)=>{
        name : prevState.name.toUpperCase()
    }); 
}

render() {
    return (
      <div>
          <p> {this.state.name} </p>

           {/* <button type= "button" 
          onClick={() => this.setState({name :"MOHIT"})}> UPPERCASE </button> */}

          <button type= "button"
          onClick={this.handleClick}> UPPERCASE </button>
      </div>
    );
  }
}

export default ClickExample;
