import AddTodoItem from './Components/AddTodoItem.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItemsContainer from './Components/TodoItemsContainer.jsx';
import TaskCompleted from './Components/TaskCompleted.jsx';
import TodoItemStoreProvider, {TodoItemStore} from './Store/todo-item-store.jsx';

function App() {  
  return (
    <TodoItemStoreProvider>
      <center><h1>TODO App</h1></center>
      <AddTodoItem/>
      <TaskCompleted/>
      <TodoItemsContainer/>
    </TodoItemStoreProvider>
  )
}

export default App
