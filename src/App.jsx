import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodFrom from "./components/AddFoodForm";

function App(props) {
  const [foods, setFoods] = useState(foodsJson)

  function deleteFood(id) {  
    const filteredArr = foods.filter((el) => {
          return el.id !== id;
        });
       setFoods(filteredArr)
      }

      function handleSubmit(event, dataForm) {
        event.preventDefault()
        console.log(dataForm)
        setFoods([ ...foods, dataForm])
        }
      
  return (

    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map(el => {
     return   <FoodBox deleteFood={deleteFood} food={el}  />

      })}
    <AddFoodFrom  handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
