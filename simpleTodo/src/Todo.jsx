import { useState } from "react";
import Todoitems from "./Todoitems";

function Todo(props) {
  const [items, setitems] = useState([
    { data: "todo1", id: 1 },
    { data: "todo2", id: 2 },
    { data: "todo3", id: 3 },
  ]);
  const [inputvalue, setinputvalue] = useState("");

  function deleteTodo(id) {
    let remainingTodos = items.filter((todo) => todo.id != id);
    setitems(remainingTodos);
  }

  function editTodo(id, newTodo) {
    let updatedTodos = items.map((todo) => {
      if (todo.id == id) todo.data = newTodo;
      return updatedTodos;
    });
    setitems(updatedTodos);
  }

  return (
    <>
      <input
        type="text"
        value={inputvalue}
        onChange={(e) => setinputvalue(e.target.value)}
      />
      <button
        onClick={() =>
          setitems([...items, { data: inputvalue, id: new Date().getTime() }])
        }
      >
        Add
      </button>
      
      <ul>
        {items.map((todo) => (
          <Todoitems
            key={todo.id}
            todo={todo}
            delete={() => deleteTodo(todo.id)}
            edit={(newTodo) => editTodo(todo.id, newTodo)}
          />
        ))}
      </ul>
    </>
  );
}
export default Todo;
