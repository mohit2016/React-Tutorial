import React, { Component } from 'react';

// Stateless Function Component
const Box = ({color}) => {
    const style = {
        padding : '10vh', 
        display : 'inline-block',
        backgroundColor : color
    }
    return (
        <div style ={style}/>
    );
};

const NUM_BOXES = 50;

class RandomBox extends Component {
    
  constructor(props){
    super(props);
    const boxes = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
    this.state = {boxes};    
   
    setInterval(() => {
        const boxes  = this.state.boxes.slice();
        const randIndex = Math.floor(Math.random() *boxes.length);
        boxes[randIndex] = this.getRandomColor();
        this.setState({boxes});
    },1);
  }

  getRandomColor(){
    let colorIndex = Math.floor(Math.random()*this.props.allColors.length);
    
        var letters = '0123456789ABCDEF';
        var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
        
    return this.props.allColors[colorIndex];
}

  render() {
      const boxes = this.state.boxes.map((color, i)=>(
        <Box key ={i} color={color}/>
      ));
    return (
      <div>
        {boxes}
      </div>
    );
  }
}

RandomBox.defaultProps ={
    allColors : ["red", "orange", "blue", "AliceBlue " , "AntiqueWhite ", "Black ", "BlueViolet ", "CadetBlue ", 
    "Chartreuse ","Chocolate", "DarkSlateGray ", "Green ", "Indigo", "Khaki", "SpringGreen ", "SteelBlue ", "Tan ",
     "Teal ", "Wheat ", "YellowGreen", "Yellow ", "Violet ", "Turquoise ", "Tomato ", "Thistle ", "SteelBlue "]
}

export default RandomBox;
  