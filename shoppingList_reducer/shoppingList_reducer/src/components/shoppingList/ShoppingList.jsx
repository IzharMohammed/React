import React, { useReducer } from "react";
//CSS import
import "./ShoppingList.css";
//Component import
import Header from "../header/Header";
import InputItem from "../InputItem/InputItem";
import Itemlist from "../ItemList/Itemlist";
import itemReducer from "../../reducers/itemReducer";
//providers/context import
import {
  ShoppingDispatchContext,
  ShoppingItemsContext,
} from "../../providers/ShoppingContext";

function ShoppingList() {
  const [shoppingItems, dispatch] = useReducer(itemReducer, []);

  return (
    <div className="shoppingList-wrapper">
      <ShoppingItemsContext.Provider value={shoppingItems}>
        <ShoppingDispatchContext.Provider value={dispatch}>
          <Header />
          <InputItem />
          <Itemlist />
        </ShoppingDispatchContext.Provider>
      </ShoppingItemsContext.Provider>
    </div>
  );
}

export default ShoppingList;
