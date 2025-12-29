import { createContext } from "react";

export const TodoItemStore = createContext(
    {
        TodoItems : [],
        AddItem : () =>{},
        DeleteItem: () =>{}
    }
);