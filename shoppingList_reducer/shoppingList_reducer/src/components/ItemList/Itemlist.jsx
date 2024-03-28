import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

function Itemlist({ shoppinglist }) {
  return (
    <div>
      {shoppinglist.map((item) => {
        return (
          <div key={shoppinglist.id}>
            <Item itemName={item.name} quantity={item.quantity} />
          </div>
        );
      })}
    </div>
  );
}

export default Itemlist;
