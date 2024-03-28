import React, { useState } from "react";
import "./InputItem.css";
import { showSuccess } from "../../utils/showToasts";


function InputItem({ addItem }) {
  const [itemName, setItemName] = useState("");

  return (
    <div className="item-input-wrapper">

      <input
        className="item-input"
        type="text"
   value={itemName}
        onChange={(e) =>{
          e.preventDefault()
          setItemName(e.target.value)
        }}
        placeholder="Add An Item..."
      />

      <button
        onClick={() => {
          addItem(itemName);
          setItemName("");
          showSuccess("Successfully added");
        }}
        className="item-input-button"
      >  Add</button>

    </div>
  );
}

export default InputItem;
