import { TodoItemStore } from "../Store/todo-item-store";
import { useContext } from "react"; 

const TaskCompleted = () => {
    const { TodoItems } = useContext(TodoItemStore);
    return (TodoItems.length == 0 && <center><h3>All Tasks Completed, Enjoy Your Day !!</h3></center>)
}
export default TaskCompleted;