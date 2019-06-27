import React from 'react';

const Form = ({ getRecipe, sortByTitle }) => (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <form onSubmit={getRecipe} style={{marginBottom: '20px'}}>
            <input type="text" name="recipeName"/>
            <button className='btn btn-primary'
                    style={{marginLeft: '10px', height: '35px', padding: '0 10px'}}>
                Search
            </button>
        </form>
        <button onClick={sortByTitle}
                className='btn btn-info'
                style={{margin: '0 0 20px 10px', height: '35px', padding: '0 10px'}}>
            Sort By Title
        </button>
    </div>
);

export default Form;