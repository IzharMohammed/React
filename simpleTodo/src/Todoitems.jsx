import { useState } from "react";
import "./Todoitems.css";
function Todoitems(props) {
  const [isEditting, setisEditting] = useState(false);
  const [todoData, settodoData] = useState(props.todo.data);
  return (
    <>
      <li>
        {isEditting ? (
          <input
            type="text"
            value={todoData}
            onChange={(e) => settodoData(e.target.value)}
          />
        ) : (
          <span>{todoData}</span>
        )}
      </li>
      <button
        onClick={() => {
          props.delete();
        }}
      >
        Done
      </button>

      <button
        onClick={() => {
          setisEditting(!isEditting);
          props.edit(todoData);
        }}
      >
        {isEditting ? "save" : "Edit"}
      </button>
    </>
  );
}

export default Todoitems;
