import { createContext, useState, useReducer } from "react";

export const TodoItemStore = createContext(
    {
        TodoItems : [],
        AddItem : () =>{},
        DeleteItem: () =>{}
    }
);

let TodoItemsReducer = (currentTodoItems, action) => {
    let newTodoItems = currentTodoItems;
    if(action.type === 'NEW_ITEM')
    {
        newTodoItems = [...currentTodoItems, 
            {
                text: action.payload.itemName, 
                dueDate: action.payload.itemDate
            }
        ]
    }
    else if (action.type === 'DELETE_ITEM')
    {
        newTodoItems = currentTodoItems.filter(item =>  
            item.text != action.payload.itemName);
    }
    return newTodoItems;
}

let TodoItemStoreProvider = (props) =>
{
    let defaultItems = [{text: "Buy Ghee", dueDate: "Today"}];
    //let [todoItems, setTodoItems] = useState([]);
    let [todoItems, TodoItemsDispatcher] = useReducer(TodoItemsReducer, defaultItems);

    let addTodoItem = (itemName, itemDate) =>{
      let newItemAction = {
        type: 'NEW_ITEM',
        payload:{
            itemName,
            itemDate
        }
      }
      TodoItemsDispatcher(newItemAction);
  }
  let deleteTodoItem = (itemName) => {
      let deleteItemAction = {
        type: 'DELETE_ITEM',
        payload:{
            itemName
        }
      }
      TodoItemsDispatcher(deleteItemAction);
  }
    return <TodoItemStore.Provider value={
        {
          TodoItems : todoItems,
          AddItem : addTodoItem,
          DeleteItem: deleteTodoItem
        }}>
            {props.children}
    </TodoItemStore.Provider>
}
export default TodoItemStoreProvider;