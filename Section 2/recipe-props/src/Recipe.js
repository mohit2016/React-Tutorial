import React , {Component} from 'react';
import './Recipe.css';
class Recipe extends Component{



    render(){
        // put in title if this.props has a title property
        const {title} = this.props;
        const ing = this.props.ingredients.map((h,i)=>(<li key ={i}>{h} </li>));
        const {instructions} = this.props;
        const {image} = this.props;

        return(
            
            <div>
                <div className="recipe-card">
                    <img src= {image} />
                    <h3 className="recipe-title">{title} </h3>
                    <h4> Ingredients: </h4>
                    <ul>
                        {ing}
                    </ul>
                    <h4> Instructions </h4>
                    <p> {instructions} </p>
                </div>
            </div>
        );
    }
}

export default Recipe;