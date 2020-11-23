import React from 'react';
import Recipe from './Recipe';

export default function RecipeList({
  recipes,
  handleRecipeAdd,
  handleRecipeDelete
}) {
  return (
    // the div on the left half of the screen with each recipe
    <div className='recipe-list'>
      <div>
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              recipe={recipe}
              handleRecipeDelete={handleRecipeDelete}
            />
          );
        })}
      </div>
      <div className='recipe-list__add-recipe-btn-container'>
        <button className='btn btn--primary' onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}
