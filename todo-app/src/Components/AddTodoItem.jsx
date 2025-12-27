import styles from './AddTodoItem.module.css';
let AddTodoItem = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-4">
                    <input type="text" placeholder="Enter Todo Item" />
                </div>
                <div className="col-4">
                    <input type="Date" />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success">Add Todo</button>
                </div>
            </div>
        </div>
    )
}
export default AddTodoItem;