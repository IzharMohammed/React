import React from 'react'
import {ACTIONS} from './App'
export default function Todo({  todo,dispatch}) {
  return (

    <div key = {todo.id}>

    <div style={{color : todo.isComplete ? '#AAA' : '#000' }}>{todo.name}</div>
    <button onClick={()=> dispatch({type : ACTIONS.TOGGLE_TODO, payload : {id : todo.id}})}>Toggle</button>
    <button onClick={()=> dispatch({type : ACTIONS.DELETE_TODO , payload : {id : todo.id}})}>Delete</button>

    </div>
  )
}
