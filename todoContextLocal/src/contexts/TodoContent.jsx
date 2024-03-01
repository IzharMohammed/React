import { useContext } from "react";
import { createContext } from "react";

export const TodoContent = createContext({
  todos: [
    {
      id: 1,
      todo: "Random todo",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (todo,id) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export function useTodo(){
    return useContext(TodoContent);
}

export const TodoContentProvider = TodoContent.Provider;
