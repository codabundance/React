let Items = ({foodItem, handlebuybuy}) => {
    //let passedItems = props.FoodItems;
    const handleBuy = (event, item) => {
        console.log(event);
        alert(`You selected ${item}`);
    };
    return (
    <ul className="list-group">
            {foodItem.map(item => 
            <li key={item} className="list-group-item">{item}
                <button className="btn btn-primary" onClick={(event) => handleBuy(event, item)}>Buy</button>
                <button className="btn btn-primary" onClick={handlebuybuy}>Buy Buy</button>
            </li>
        )}
    </ul>
    )
}
export default Items;