import React, { useReducer } from "react";
//CSS import
import "./ShoppingList.css";
//Component import
import Header from "../header/Header";
import InputItem from "../InputItem/InputItem";
import Itemlist from "../ItemList/Itemlist";
import itemReducer from "../../reducers/itemReducer";
function ShoppingList() {
  const [shoppingItems, dispatch] = useReducer(itemReducer, []);

  const handleAddItem = (name) => {
    console.log(name);
    dispatch({
      type: "add_item",
      itemName: name,
    });
  };

  function addQuantity(id) {
    dispatch({
      type: "increment_item",
      itemId: id,
    });
  }

  function removeQuantity(id) {
    dispatch({
      type: "decrement_item",
      itemId: id,
    });
  }

  return (
    <div className="shoppingList-wrapper">
      <Header />
      <InputItem addItem={handleAddItem} />
      <Itemlist
        addQuantity={addQuantity}
        removeQuantity={removeQuantity}
        shoppinglist={shoppingItems}
      />
    </div>
  );
}

export default ShoppingList;
