import { useEffect, useState } from "react";
import "./App.css";
import { TodoContentProvider } from "./contexts/TodoContent";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, settodos] = useState([]);

  const addTodo = (todo) => {
   

          settodos((prev)=>[{...todo},...prev])
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

/* useEffect(()=>{
  console.log(localStorage.getItem("todos"));
 let todos = JSON.parse(localStorage.getItem("todos"));
 if (todos ) { // Check if todos is an array
  settodos(todos);
}
},[]) */

useEffect(() => {
  console.log("Inside useEffect");
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  console.log("Stored Todos:", storedTodos);
  if (storedTodos) {
    settodos(storedTodos);
  }
}, []);


/* useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  if (storedTodos) {
    settodos(storedTodos);
  }
}, []);
 */

useEffect(()=>{
  localStorage.setItem("todos" , JSON.stringify(todos))
},[todos])

  return (
    <TodoContentProvider
      value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
            </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}        
        {
          todos.map((todo)=>(       
            <div key={todo.id} className="w-full">
              <TodoItem todo={todo} />
              </div>
            )) }
        </div>
            </div>
      </div>
    </TodoContentProvider>
  );
}

export default App;
