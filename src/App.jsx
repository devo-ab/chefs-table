import "./App.css";
// import Header from "./components/Header/Header";
// import Banner from "./components/Banner/Banner";
import Recipes from "./components/Recipes/Recipes";
import Cooks from "./components/Cooks/Cooks";
import { useState } from "react";

function App() {


  const [cooks, setCooks] = useState([]);
  const handleAddToCook = (recipe) => {
    console.log("clicked");
    const newCooks = [...cooks, recipe];
    setCooks(newCooks);
  };

  const [cooking, setCooking] = useState([]);
  const handleAddToCooking = (cook) => {
    const newCooking = [...cooking, cook];
    setCooking(newCooking);
    
    
    handleTotalTime(cook.preparing_time);
    handleTotalCalories(cook.calories)
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
      {/* <Header></Header>
      <Banner></Banner> */}
      <div>
        <div>
        <div>
            <h1 className="text-2xl lg:text-4xl font-semibold leading-10 text-center text-[#150B2B]">Our Recipes</h1>
            <p className="text-[#878787] leading-6 text-center mt-1 lg:mt-5">Prepare to tantalize your taste buds with our exquisitely crafted recipe that promises to elevate <br />your dining experience to new heights of culinary delight!</p>
            </div>
          <div className="flex flex-col-reverse lg:flex-row gap-10 container mx-auto">
            <Recipes handleAddToCook={handleAddToCook} handleAddToCooking={handleAddToCooking}></Recipes>
            <Cooks cooks={cooks} handleAddToCooking={handleAddToCooking} cooking={cooking} totalTime={totalTime} totalCalories={totalCalories}></Cooks>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
