import AddTodoItem from './Components/AddTodoItem.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItemsContainer from './Components/TodoItemsContainer.jsx';
import { useState } from 'react';
import TaskCompleted from './Components/TaskCompleted.jsx';

function App() {
  let [todoItems, setTodoItems] = useState([]);

  let addTodoItem = (itemName, itemDate) =>{
      let tempItem = {text : itemName, dueDate: itemDate};
      let newTodoItem = [...todoItems, tempItem];
      setTodoItems(newTodoItem);
  }
  let deleteTodoItem = (itemName) => {
      let newTodoItem = todoItems.filter(item =>  item.text != itemName)
      setTodoItems(newTodoItem);
  }
  return (
    <>
    <center><h1>TODO App</h1></center>
      <AddTodoItem onAddClick = {addTodoItem}/>
      {todoItems.length === 0 && <TaskCompleted></TaskCompleted>}
      <TodoItemsContainer TodoItems={todoItems} onDeleteClick ={deleteTodoItem}/>
    </>
  )
}

export default App
