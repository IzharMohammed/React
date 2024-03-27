import React from "react";
//CSS import
import "./ShoppingList.css";

//Component import
import Header from "../header/Header";
import InputItem from "../InputItem/InputItem";

function ShoppingList() {
  return (
<div className="shoppingList-wrapper">
      <Header />
      <InputItem />
      </div>
  );
}

export default ShoppingList;
