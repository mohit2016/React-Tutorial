import React, { Component } from 'react';
import './App.css';
import {Switch , Route, withRouter, NavLink} from 'react-router-dom';

// Actual UI of each Component
const HomePage = ()=> {return <div>Home Page</div>};
const AboutPage = ()=> (<div>About Page</div>);
const NamePage = (props)=> (<div>Hello, {props.match.params.name + " " + props.match.params.id} </div>)

// This is Router - tells which Component will load
const SwitchDemo = ({history}) =>(
  <div>
      <Switch>
      <Route path = "/about" component = {AboutPage}/>
      {/* if the link is match with the path of Route */}
      <Route path = "/:name/:id" component = {NamePage}/> 
      <Route path = "/" component = {HomePage}/> 
    </Switch>
      <button onClick ={ ()=>history.push('/')}>
        Go back
      </button>
    </div>
);

withRouter(SwitchDemo);



class App extends Component {
  render() {
    const s = {backgroundColor : 'red', color: 'white'};
    
    return (
      <div className="App">
        <NavLink  exact  activeStyle = {s} to = "/" > HOME </NavLink>
        <NavLink  exact  activeStyle = {s} to = "/about" > ABOUT </NavLink>
        <NavLink  exact  activeStyle = {s} to = "/:name/:id" > PARAMS </NavLink>
        <div style = {{fontSize : '3em'}}>
          <SwitchDemo />
        </div>
      </div>
    );
  }
}

export default App;
