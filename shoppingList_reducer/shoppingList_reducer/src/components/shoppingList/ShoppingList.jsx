import React from "react";
//CSS import
import "./ShoppingList.css";

//Component import
import Header from "../header/Header";
import InputItem from "../InputItem/InputItem";
import Itemlist from "../ItemList/Itemlist";


let shoppinglist =[
  {id : 1 , name : "kiwi" , quantity : 10},
  {id : 2 , name : 'mango' , quantity : 10}
]

function ShoppingList() {
  return (
<div className="shoppingList-wrapper">
      <Header />
      <InputItem />
      <Itemlist  shoppinglist={shoppinglist}/>
      </div>
  );
}

export default ShoppingList;
