import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Recipes from "./components/Recipes/Recipes";
import Cooks from "./components/Cooks/Cooks";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cooks, setCooks] = useState([]);
  const handleAddToCook = (recipe) => {
    const isExist = cooks.find((item) => item.recipe_id == recipe.recipe_id);
    if (!isExist) {
      const newCooks = [...cooks, recipe];
      setCooks(newCooks);
    } else {
      toast("Already in want to cook");
    }

    console.log("clicked");
  };

  const [cooking, setCooking] = useState([]);
  const handleAddToCooking = (cook, recipe_id) => {
    const newCooking = [...cooking, cook];
    setCooking(newCooking);
    console.log(recipe_id);
    const remainingCooks = cooks.filter((coook) => coook.recipe_id !== recipe_id);
    setCooks(remainingCooks);

    handleTotalTime(cook.preparing_time);
    handleTotalCalories(cook.calories);
  };

  const [totalTime, setTotalTime] = useState(0);
  const handleTotalTime = (time) => {
    setTotalTime(totalTime + time);
  };

  const [totalCalories, setTotalCalories] = useState(0);
  const handleTotalCalories = (calories) => {
    setTotalCalories(totalCalories + calories);
  };

  return (
    <>
      <div className="w-[1270px] mx-auto">
      <Header></Header>
      <Banner></Banner>
      </div>
      <div className="w-[1270px] mx-auto">
        <div>
          <div className="mt-10">
            <h1 className="text-2xl lg:text-4xl font-semibold leading-10 text-center text-[#150B2B]">
              Our Recipes
            </h1>
            <p className="text-[#878787] leading-6 text-center mt-1 lg:mt-5">
              Prepare to tantalize your taste buds with our exquisitely crafted recipe that promises
              to elevate <br />
              your dining experience to new heights of culinary delight!
            </p>
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-10 container mx-auto">
            <Recipes
              handleAddToCook={handleAddToCook}
              handleAddToCooking={handleAddToCooking}
            ></Recipes>
            <Cooks
              cooks={cooks}
              handleAddToCooking={handleAddToCooking}
              cooking={cooking}
              totalTime={totalTime}
              totalCalories={totalCalories}
            ></Cooks>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
