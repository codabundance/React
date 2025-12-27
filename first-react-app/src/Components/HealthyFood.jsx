import React from "react";
let HealthyFood = () => {
    let HealthyFoodItems = ["Eggs", "Milk", "Green Veggies", "Daal", "Roti", "Fruits"];
    return <>
    <ul className="list-group">
        {HealthyFoodItems.map((item) => <li key={item} className="list-group-item">{item}</li>)}
    </ul>
</>
}

export default HealthyFood;