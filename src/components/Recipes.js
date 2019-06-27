import React from 'react';

import { Link } from 'react-router-dom';

const Recipes = ({recipes}) => {
    const elements = recipes.map((recipe) => {
       return(
           <li key={recipe.recipe_id} className='col-md-4' style={{ marginBottom: '20px'}}>
               <div className='recipes__box'>
                   <img src={recipe.image_url}
                        alt={recipe.title}/>
                   <div className='recipe__text'>
                       <p className='recipes__title'>
                           {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.slice(0, 30)}...`}
                       </p>
                       <p className='recipes__subtitle'>
                           Publisher: <span>{recipe.publisher}</span>
                       </p>
                   </div>
                   <button className='recipe__buttons'>
                       <Link to={{ pathname: `/recipe/${recipe.recipe_id}`,
                                   state: { title: recipe.title,
                                            publisher: recipe.publisher,
                                            img: recipe.image_url,
                                            url: recipe.source_url,
                                            publisherUrl: recipe.publisher_url
                                          }
                       }}>View Recipe</Link>
                   </button>
               </div>
           </li>
       ); 
    });
    return(
        <div className='container'>
            <ul className='row'>
                {elements}
            </ul>
        </div>
    );
};

export default Recipes;