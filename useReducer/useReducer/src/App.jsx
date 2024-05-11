import { useReducer, useState } from "react";
import "./App.css";
import Todo from "./Todo";

 export const ACTIONS = {
  ADD_TODO  : 'addTodo',
  TOGGLE_TODO : 'toggleTodo',
  DELETE_TODO : 'deleteTodo'
}

function reducer(todos, action) {
  if (action.type === ACTIONS.ADD_TODO) {
    return [...todos, addTodo(action.payload)];
  }
  if (action.type === ACTIONS.TOGGLE_TODO) {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
    });
  }

  if(action.type === ACTIONS.DELETE_TODO){
   return todos.filter(todo=>todo.id!==action.payload.id)
  }

}

function addTodo(name) {
  return { id: Date.now(), name: name, isComplete: false };
}

function App() {
  const [name, setName] = useState("");

  const [todos, dispatch] = useReducer(reducer, []);

  function handlesubmit(e) {
    e.preventDefault();
    dispatch({ type: "addTodo", payload: name });
    setName("");
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => (
        <Todo todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
}

export default App;
