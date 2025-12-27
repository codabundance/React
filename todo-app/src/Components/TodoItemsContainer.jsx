import TodoItem from "./TodoItem";
import styles from './TodoItemsContainer.module.css';

let TodoItemsContainer = ({ todoItems }) => {
    return (
        <div className="container text-center">
            {todoItems.map((item) => <TodoItem todoItem={item} />)}
        </div>
    )
}
export default TodoItemsContainer;