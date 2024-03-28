import React from "react";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
function Item({ itemName, quantity }) {
  return (
    <div className="item-wrapper">

      <div className="change-quantity add-item">
        <FontAwesomeIcon icon={faPlus} />
      </div>

      <div className="itemName">{itemName}</div>
      <div className="itemQuantity">{quantity}</div>

      <div className="change-quantity remove-item">
        <FontAwesomeIcon icon={faMinus} />
      </div>
    </div>
  );
}

export default Item;
