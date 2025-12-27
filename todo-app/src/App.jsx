import AddTodoItem from './Components/AddTodoItem.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItemsContainer from './Components/TodoItemsContainer.jsx';

function App() {
  const todoItems = [
    { id: 1, text: "Buy Milk", dueDate: "27/12/2025" },
    { id: 2, text: "Buy Bread", dueDate: "27/12/2025" },
    { id: 2, text: "Buy Veggies", dueDate: "27/12/2025" },
    { id: 2, text: "Pay EMI", dueDate: "1/1/2026" },
    { id: 2, text: "Pay Rent", dueDate: "1/1/2026" }
  ];
  return (
    <>
    <center><h1>TODO App</h1></center>
      <AddTodoItem />
      <TodoItemsContainer todoItems={todoItems}/>
    </>
  )
}

export default App
