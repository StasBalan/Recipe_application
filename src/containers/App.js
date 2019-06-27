import React, { Component } from 'react';
import './App.css';

import Form from '../components/Form';
import Recipes from '../components/Recipes';

const API_KEY = 'f20c68d631e95ed4de4b3b22ca572411';

class App extends Component {

    state = {
        recipes: []
    };

    getRecipe = async (e) => {
        e.preventDefault();
        const recipeName = e.target.elements.recipeName.value;
        const api = await fetch(`http://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
        const data = await api.json();
        this.setState({recipes: data.recipes});
        console.log(this.state.recipes);
    };

    sortByTitle = () => {
        const { recipes } = this.state;
        recipes.sort((a,b) => {
            // console.log(a.title);
            if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            return 0;
        });
        this.setState({recipes: recipes});
    };

    render() {
        const { recipes } = this.state;

        return(
            <div className="App">
                <header className="App-header">
                    <h1>Recipe</h1>
                </header>
                <Form getRecipe={this.getRecipe}
                      recipes={recipes}
                      sortByTitle={this.sortByTitle}/>
                <Recipes recipes={recipes}/>
            </div>
        );
    }
}

export default App;
