import React, { useState } from "react";
//CSS import
import "./ShoppingList.css";
//Component import
import Header from "../header/Header";
import InputItem from "../InputItem/InputItem";
import Itemlist from "../ItemList/Itemlist";
//uuid import
import { v4 as uuidv4 } from 'uuid';

function ShoppingList() {
  const [shoppinglist, setShoppinglist] = useState([]);

  const handleAddItem = (itemName) => {
      setShoppinglist([
        ...shoppinglist,
        {id : uuidv4() , name : itemName, quantity : 1}
      ])

  };

function addQuantity(itemId){
 let newShoppingList = shoppinglist.map((item)=>{
    if(item.id===itemId) {
      item.quantity ++ 
    }
  })
  setShoppinglist(newShoppingList); 
}

function removeQuantity(itemId){
  let newShoppingList = shoppinglist.map((item)=>{
     if(item.id===itemId) {
       item.quantity --
     }
   })
   setShoppinglist(newShoppingList); 
 }
 

  return (
    <div className="shoppingList-wrapper">
      <Header />
      <InputItem addItem={handleAddItem} />
      <Itemlist addQuantity={addQuantity} removeQuantity={removeQuantity} shoppinglist={shoppinglist} />
    </div>
  );
}

export default ShoppingList;
