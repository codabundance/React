import Items from "./Items";
import ErrorMessage from "./ErrorMessage";
import Container from "./Container";
import { useState } from "react";

let FoodItems = () => {
    let textToShowArr = useState("Selected Food Item will be shown here");
    let textToShow = textToShowArr[0];
    let setTextToShow = textToShowArr[1];

    // We can also destructure it in the following way
    // let [textToShow, setTextToShow] = useState("Selected Food Item will be shown here"); Pay attention to the array destructuring syntax
    let [HealthyFoodItems, setHealthyFoodItems] = useState([]);
    let handleSearch = (e) => {
        if(e.key === 'Enter' && e.target.value.trim() !== ""){
            let newItems = [...HealthyFoodItems, e.target.value];
            setHealthyFoodItems(newItems);
            e.target.value = "";
            return;
        }
        setTextToShow(e.target.value);
    }
    return (
    <>
        <Container>
            <h1>Healthy Food Items</h1>
            <input type="text" placeholder="Search Food Items" onKeyDown={handleSearch}/>
            <ErrorMessage foodItem={HealthyFoodItems}></ErrorMessage>
            <Items 
                foodItem={HealthyFoodItems}
                handlebuybuy={() => alert('You clicked Buy Buy')}
            ></Items>
        </Container>
    </>
    )
}
export default FoodItems;