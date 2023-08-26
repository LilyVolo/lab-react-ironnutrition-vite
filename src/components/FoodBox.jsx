// Your code here
import React from "react"

function FoodBox (props) {
  
return (
<div key={props.food.id}>
  <p>{props.food.name}</p>

  <img src={props.food.image} style={{width: '8rem'}}/>

  <p>Calories: {props.food.calories}</p>
  <p>Servings {props.food.servings}</p>

  <p>
    <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
  </p>

  <button onClick={()=> props.deleteFood(props.food.id)}>Delete</button>
</div>
)
}

export default FoodBox