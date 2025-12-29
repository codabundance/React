import { useContext } from "react";
import TodoItem from "./TodoItem";
import {TodoItemStore} from "../Store/todo-item-store";

let TodoItemsContainer = ({ onDeleteClick }) => {
    let { TodoItems } = useContext(TodoItemStore);
    return (
        <div className="container text-center">
            {TodoItems.map((item) => <TodoItem todoItem={item} />)}
        </div>
    )
}
export default TodoItemsContainer;