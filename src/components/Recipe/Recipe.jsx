import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100  border border-[#28282833]">
        <figure className="px-10 pt-10">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt=""
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#282828] text-xl font-semibold leading-6">
            Spaghetti Bolognese
          </h2>
          <p className="text-[#878787] leading-7">
            Classic Italian pasta dish with savory meat sauce.
          </p>
          <hr />
          <div className="mt-3">
            <p className="text-[#282828] text-lg font-medium leading-6">Ingredients: </p>
            <div className="text-[#878787] text-lg leading-8 ml-3">
              <li>2 cloves garlic, minced</li>
            </div>
          </div>
          <hr />
          <div className="flex gap-5 mt-3">
            <div className="flex items-center gap-3 text-[#282828CC]">
              <CiClock2 />
              <p>30 minutes</p>
            </div>

            <div className="flex items-center gap-3 text-[#282828CC]">
              <AiOutlineFire />
              <p>600 calories</p>
            </div>
          </div>
          <div className="card-actions mt-2">
            <button className="btn  bg-[#0BE58A] rounded-3xl px-4 text-[#150B2B] text-lg font-medium">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
