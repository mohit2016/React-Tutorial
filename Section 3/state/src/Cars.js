import React, { Component } from 'react';
import App from './App';

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


// Make Duplicate first of cars and hobbies. Because accessing directly is a bad thing. 
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
        return  <li key ={index}>
                    <h3> {car.name} </h3>
                    <h4> {car.models.join(" , ")}  </h4>
                </li>
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
