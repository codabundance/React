import { useContext } from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemStore } from "../Store/todo-item-store";

let TodoItem = ({ todoItem }) => {
    const { DeleteItem } = useContext(TodoItemStore);
    return (
    <>
        <div className="row">
                <div className="col-4">{todoItem.text}</div>
                <div className="col-4">{todoItem.dueDate}</div>
                <div className="col-2">
                    <button type="button" onClick={() => DeleteItem(todoItem.text)} className="btn btn-danger">
                        <MdDelete />
                    </button>
                </div>
        </div>
    </>
    )
}
export default TodoItem;