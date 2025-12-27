import styles from './TodoItems.module.css';
let TodoItem = ({ todoItem }) => {
    return (
    <>
        <div className="row">
                <div className="col-4">{todoItem.text}</div>
                <div className="col-4">{todoItem.dueDate}</div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
        </div>
    </>
    )
}
export default TodoItem;