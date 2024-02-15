import { useState } from "react";
import TodoList from "./TodoList";
function Todo(){
    const [todos,setTodos]=useState([]);
    const[newTodo , setnewTodo] = useState('');
    return(
        <>
        <input 
        type="text" 
        value={newTodo}
        onChange={(e)=> (  setnewTodo(e.target.value) )
        } 
    />
        <button onClick={()=>(
            setTodos([...todos,newTodo]) ,
           setnewTodo('')
            )}>Add Todo</button>
        <TodoList todos= {todos}/>
        </>
    )
}
export default Todo;