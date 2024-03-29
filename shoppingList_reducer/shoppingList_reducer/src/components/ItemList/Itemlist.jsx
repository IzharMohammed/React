import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

function Itemlist({addQuantity ,removeQuantity ,   shoppinglist }) {
  return (
    <div>
      {shoppinglist && shoppinglist.map((item) => {
        return (
          <div key={item.id}>
            <Item id={item.id} addQuantity={addQuantity}  removeQuantity={removeQuantity} itemName={item.name} quantity={item.quantity} />

          </div>
        );
      })}
    </div>
  );
}

export default Itemlist;
