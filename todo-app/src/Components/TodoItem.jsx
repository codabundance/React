import { useState } from "react";
import { MdDelete } from "react-icons/md";

let TodoItem = ({ todoItem, onDelClick }) => {
    return (
    <>
        <div className="row">
                <div className="col-4">{todoItem.text}</div>
                <div className="col-4">{todoItem.dueDate}</div>
                <div className="col-2">
                    <button type="button" onClick={() => onDelClick(todoItem.text)} className="btn btn-danger">
                        <MdDelete />
                    </button>
                </div>
        </div>
    </>
    )
}
export default TodoItem;