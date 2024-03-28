import React from "react";
import "./InputItem.css";
import { showSuccess } from "../../utils/showToasts";

function InputItem() {
  return (
    <div className="item-input-wrapper">
      <input className="item-input" type="text" placeholder="Add An Item..." />
      <button 
      onClick={()=>showSuccess("Successfully added")}
      className="item-input-button">Add</button>
    </div>
  );
}

export default InputItem;
