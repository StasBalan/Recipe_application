import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recipe extends Component {
    render() {
        const { title, publisher, img, url, publisherUrl } = this.props.location.state;
        console.log(this.props.location.state);
        return(
            <div className='container'>
                <div className='active-recipe'>
                    <img src={img}
                         alt={title}
                         className='active-recipe__img'/>
                    <h1 className='active-recipe__title'>{title}</h1>
                    <p className='active-recipe__publisher'><b>Publisher: </b>{publisher}</p>
                    <p className='active-recipe__website'>
                        <b>Website publisher: </b>
                        <span>
                            <a href={publisherUrl}>{publisherUrl}</a>
                        </span>
                    </p>
                    <p className='active-recipe__website'>
                        <b>Website for recipe: </b>
                        <span>
                            <a href={url}>{url}</a>
                        </span>
                    </p>
                    <button className='active-recipe__button'>
                        <Link to='/'>Go Back</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default Recipe;