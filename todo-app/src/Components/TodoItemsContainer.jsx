import TodoItem from "./TodoItem";
let TodoItemsContainer = ({ TodoItems, onDeleteClick }) => {
    return (
        <div className="container text-center">
            {TodoItems.map((item) => <TodoItem todoItem={item} onDelClick ={onDeleteClick} />)}
        </div>
    )
}
export default TodoItemsContainer;