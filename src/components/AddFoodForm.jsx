import React from "react"
import { useState } from "react"
// Your code here
function AddFoodFrom(props) {

    const [dataForm, setDataForm] = useState({
       name: '',
       image :'',
       calories: 0,
       servings: 0,
    })


    function handleChange(event) {
		const key = event.target.name
		const value = event.target.value
		console.log(event.target.id, event.target.value)
		setDataForm({ ...dataForm, [key]: value })
	}

return (
    <form onSubmit={(event) => props.handleSubmit(event, dataForm)}>
				<div>
					<label htmlFor="name">  </label>
					<input
                        id ='newName'
					    value={dataForm.name}
						onChange={handleChange}
						type="text"
						name="name"
					/>
				</div>
                <div>
					<label htmlFor="image">  </label>
					<input
                        id ='newImg'
					    value={dataForm.image}
						onChange={handleChange}
						type="text"
						name="image"
					/>
				</div>
                <div>
					<label htmlFor="calories">  </label>
					<input
                        id ='newCalories'
					    value={dataForm.calories}
						onChange={handleChange}
						type="number"
						name="calories"
					/>
				</div>
                <div>
					<label htmlFor="servings">  </label>
					<input
                        id ='newServings'
					    value={dataForm.servings}
						onChange={handleChange}
						type="number"
						name="servings"
					/>
				</div>

                <button className="create">Create</button>
                </form>

)
}
export default AddFoodFrom