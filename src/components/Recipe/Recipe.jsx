import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({recipe, handleAddToCook}) => {
  const {recipe_image, recipe_name, short_description, preparing_time, calories, ingredients, recipe_id} = recipe;
  return (
    <div>
      <div className="card w-96 bg-base-100  border border-[#28282833]">
        <figure className="px-10 pt-10">
          <img
            src={recipe_image}
            alt=""
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#282828] text-xl font-semibold leading-6">{recipe_name}</h2>
          <p className="text-[#878787] leading-7">{short_description}</p>
          <hr />
          <div className="mt-3">
            <p className="text-[#282828] text-lg font-medium leading-6">Ingredients: {ingredients.length}</p>
            <div className="text-[#878787] text-lg leading-8 ml-3">
              <div>
                {
                  ingredients.map((ingredient, idx) => <span key={idx}><li>{ingredient}</li></span>)
                }
              </div>
            </div>
          </div>
          <hr />
          <div className="flex gap-5 mt-3">
            <div className="flex items-center gap-3 text-[#282828CC]">
              <CiClock2 />
              <p>{preparing_time} minutes</p>
            </div>

            <div className="flex items-center gap-3 text-[#282828CC]">
              <AiOutlineFire />
              <p>{calories} calories</p>
            </div>
          </div>
          <div className="card-actions mt-2">
            <button onClick={() => handleAddToCook(recipe)} className="btn  bg-[#0BE58A] rounded-3xl px-4 text-[#150B2B] text-lg font-medium">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes ={
  recipe: PropTypes.object.isRequired,
  handleAddToCook: PropTypes.func.isRequired
}

export default Recipe;
