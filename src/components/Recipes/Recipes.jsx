import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe"
import PropTypes from 'prop-types';

const Recipes = ({handleAddToCook}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])


    return (
        <div>
            <div className="grid grid-cols-2 gap-10 mt-8 ">
                {
                    recipes.map(recipe => <Recipe handleAddToCook={handleAddToCook} key={recipe.recipe_id} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

Recipes.propTypes ={
    handleAddToCook: PropTypes.func.isRequired,
  }

export default Recipes;