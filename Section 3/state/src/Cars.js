import React, { Component } from 'react';
import App from './App';
import PropTypes from 'prop-types'

// Stateless Functional Component
const CarType = props =>{
    return (
        <li>
            <h3> {props.name} </h3>
            <h4> Models : {props.models.join(" , ")}  </h4>
        </li>
    );
}

// PropTypes for CarType
CarType.propTypes = {
    name : PropTypes.string,
    models : PropTypes.arrayOf(PropTypes.string)
};

class Cars extends Component {
  
    constructor(){
      super();
  
    this.state = {
      cars : [{
        name : "BMW",
        models : ["q1","q2"]
      },{
        name : "Mercedes",
        models : ["r1", "r2"]
      },{
        name : "Audi",
        models : ["a4","a6"]
      }]
  };

  setTimeout(() => {
        const randCar =  Math.floor(Math.random() * this.state.cars.length ) ;
        const randModel = Math.floor(Math.random()*this.state.cars[randCar].length);


// Make Duplicate first of cars and models. Because accessing directly is a bad thing. 
// Always Remember Changes to this.state should be pure.

        // const cars = this.state.cars.slice();
        // cars[randCar] = Object.assign({},cars[randCar]);
        // cars[randCar].models = cars[randCar].models.slice();
        // cars[randCar].models.splice(randModel,1);
        


        const cars = this.state.cars.map((car,index)=>{
            if(index === randCar){
                const models = car.models.slice(); //copy 
                models.splice(randModel, 1);
                return{
                    ...car, models
                }
            }
            return car;
        });

        this.setState({cars :  cars});
  }, 5000);

}
  render() {
    const cars  = this.state.cars.map((car,index)=>{
        return  <CarType key ={index} 
                name = {car.name}
                models = {car.models}
                />
                    
                
    });
    return (
      <div>
          
        <p>State [Color] Will Change after 2 Second</p>
        <App/>
        <p>Random model of Random Car will be Deleted in 5 second</p>
        <ul>
            {cars}
        </ul>
      </div>
    );
  }
}

export default Cars;
