import React, { useContext } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { ShoppingItemsContext } from "../../providers/ShoppingContext";

function Itemlist() {

  const shoppinglist=useContext(ShoppingItemsContext)

  return (
    <div>
      {shoppinglist && shoppinglist.map((item) => {
        return (
          <div key={item.id}>
            <Item id={item.id}  itemName={item.name} quantity={item.quantity} />
          </div>
        );
      })}
    </div>
  );
}

export default Itemlist;
