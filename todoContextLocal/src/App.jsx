import { useState } from "react";
import "./App.css";
import { TodoContent } from "./contexts/TodoContent";
import { TodoContentProvider } from "./contexts/TodoContent";
function App() {
  const [todos, settodos] = useState([]);

  const addTodo = (todo) => {
settodos((prev)=>[{id:Date.now(),...todo},...prev])
  };

  const deleteTodo = (id) => {
 settodos((prev)=>prev.filter((todo)=>todo.id!==id))
  };

  const updateTodo = (todo, id) => {
settodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? todo : prevTodo))
  };

  const toggleComplete = (id) => {
    settodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo , completed : !prevTodo.completed} :prevTodo))
  };      
  return (
    <TodoContentProvider
      value={(todos, addTodo, updateTodo, deleteTodo, toggleComplete)}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContentProvider>
  );
}

export default App;
