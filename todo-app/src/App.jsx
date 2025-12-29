import AddTodoItem from './Components/AddTodoItem.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItemsContainer from './Components/TodoItemsContainer.jsx';
import { useState, useReducer } from 'react';
import TaskCompleted from './Components/TaskCompleted.jsx';
import {TodoItemStore} from './Store/todo-item-store.jsx';

function App() {
  let defaultValue = [
    // {text: "Buy Ghee", dueDate: "today" },
    // {text: "Buy Pen", dueDate: "today"}
  ];
  let [todoItems, setTodoItems] = useState(defaultValue);
  //let [todoItems, TodoItemsDispatcher] = useReducer()

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
      <TodoItemStore.Provider value={
        {
          TodoItems : todoItems,
          AddItem : addTodoItem,
          DeleteItem: deleteTodoItem
        }}>
        <AddTodoItem/>
        <TaskCompleted/>
        <TodoItemsContainer/>
      </TodoItemStore.Provider>
    </>
  )
}

export default App
