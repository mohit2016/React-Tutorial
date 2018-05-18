import React , {Component} from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component{
    static defaultProps ={
        recipes : [{
            title : "Noddles",
            instructions : "Mix all ingredients",
            ingredients : ["abc","xyz","qwr"],
            image : "noodles.jpg"
        },
        {
            title : "Pasta",
            instructions : "Mix all ingredients",
            ingredients : ["abc","xyz","qwr"],
            image : "pasta.jpg"
        },
        {
            title : "Pizza",
            instructions : "Mix all ingredients",
            ingredients : ["abc","xyz","qwr"],
            image : "pizza.jpg"
        }]
    };

    render(){
        
            const recipes = this.props.recipes.map((r,i)=>(
                <Recipe key={i} 
                    title = {r.title} 
                    instructions= { r.instructions} 
                    ingredients ={ r.ingredients} 
                    image = { r.image} />
            ));
           
            return(
                <div className="recipe-list">{recipes} </div>
            );
    }
}
export default RecipeList;