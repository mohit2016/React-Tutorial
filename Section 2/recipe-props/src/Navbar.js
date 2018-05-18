import React , {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <header>
            <ul class="topnav">
                <li><a>Recipe Website</a></li>
                <li><a>New Recipe</a></li>
                <li><a>Summary</a></li>
                <li class="right"><a>Login</a></li>
            </ul>
            </header>
        );
    }
}
export default Navbar;