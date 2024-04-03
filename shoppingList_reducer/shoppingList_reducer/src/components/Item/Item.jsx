import React, { useContext } from "react";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { showNotify } from "../../utils/showToasts";
import { ShoppingDispatchContext } from "../../providers/ShoppingContext";

function Item({ id ,  itemName, quantity }) {
  const dispatch =useContext(ShoppingDispatchContext);
  return (
    <div className="item-wrapper">

      <div className="change-quantity add-item" 
      onClick={()=>{
        dispatch({
          type: "increment_item",
          itemId: id,
        });
      }}>
        <FontAwesomeIcon icon={faPlus} />
      </div>

      <div className="itemName">{itemName}</div>
      <div className="itemQuantity">{quantity}</div>

      <div className="change-quantity remove-item"   
      onClick={()=>{
        if(quantity==1) showNotify(`${itemName} removed from the list`)
        dispatch({
          type: "decrement_item",
          itemId: id,
        });
      }}>
        <FontAwesomeIcon icon={faMinus} />
      </div>
    </div>
  );
}

export default Item;
