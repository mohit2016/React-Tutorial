import React, { Component } from 'react';
import './RecipeApp.css';
import Navbar from './Navbar.js';
import RecipeList from './RecipeList';

class RecipeApp extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <RecipeList/>
      </div>
    );
  }
}

export default RecipeApp;
