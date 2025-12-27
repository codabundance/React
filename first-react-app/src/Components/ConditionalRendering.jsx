import React from "react";
let ConditionalRendering = () => {
    //let HealthyFoodItems = ["Eggs", "Milk", "Green Veggies", "Daal", "Roti", "Fruits"];
    let HealthyFoodItems = [];
    // if(HealthyFoodItems.length === 0){
    //     return <h3>No Healthy Food Items Available</h3>
    // }
    return <>
    <h1>Healthy Food Items</h1>
    {HealthyFoodItems.length === 0 && <h3>No Healthy Food Items Available</h3>}
    <ul className="list-group">
        {HealthyFoodItems.map((item) => <li key={item} className="list-group-item">{item}</li>)}
    </ul>
</>
}

export default ConditionalRendering;