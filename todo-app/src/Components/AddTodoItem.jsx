import { useContext } from "react";
import { useState, useRef } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { TodoItemStore } from "../Store/todo-item-store";

let AddTodoItem = () => {
    const { AddItem } = useContext(TodoItemStore);
    let todoNameElement = useRef();
    let todoDateElement = useRef();
    const handleAddClick = () =>
    {
        let todoName = todoNameElement.current.value;
        let todoDate = todoDateElement.current.value;
        todoNameElement.current.value = "";
        todoDateElement.current.value = "";
        AddItem(todoName, todoDate);
    }
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-4">
                    <input type="text" placeholder="Enter Todo Item" ref={todoNameElement} />
                </div>
                <div className="col-4">
                    <input type="Date" ref={todoDateElement}/>
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