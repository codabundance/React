import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

let AddTodoItem = ({onAddClick}) => {
    const [todoName, setTodoName] = useState();
    const [todoDate, setTodoDate] = useState();

    const handleOnNameChange = (event) =>
    {
        setTodoName(event.target.value);
    }
    const handleOnDateChange = (event) =>
    {
        setTodoDate(event.target.value);
    }
    const handleAddClick = () =>
    {
        onAddClick(todoName, todoDate);
        setTodoName("");
        setTodoDate("");
    }
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-4">
                    <input type="text" placeholder="Enter Todo Item" onChange={handleOnNameChange} />
                </div>
                <div className="col-4">
                    <input type="Date" onChange={handleOnDateChange}/>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success" onClick={handleAddClick}>
                        <IoAddCircleOutline />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default AddTodoItem;