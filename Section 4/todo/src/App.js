import React, { Component } from 'react';

//Stateless Functional Component
const TodoItem = ({text}) =>(
  <li> {text} </li>
);

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos : [],
      newtodo : ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    // add new item in list
    const todos = [...this.state.todos, this.state.newtodo];
    this.setState({todos, newtodo: ''});
  }

  render() {
    // take new item
    const {newtodo} =  this.state;
    // make <li> for all the list currently in list
    const todos = this.state.todos.map((t,i)=>{
      return <TodoItem key= {i} text = {t}/>
    });

    return (
      <div>
        <h1> Simple To-Do </h1>
        <form onSubmit={this.handleSubmit}>
          {/* onchange listener */}
          <input
            type = "text"
            name = "newtodo"
            placeholder ="task name "
            value = {newtodo}
            onChange = {(e)=> this.setState({newtodo: e.target.value})}
          />
          <button type="submit"> submit </button>
        </form>
        
      {/* Display the list */}
        <div>
          <h3> List goes Here: </h3>
          <ol>
            {todos}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
