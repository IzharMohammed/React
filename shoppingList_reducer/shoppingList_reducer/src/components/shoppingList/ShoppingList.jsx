import React, { useState } from "react";
//CSS import
import "./ShoppingList.css";
//Component import
import Header from "../header/Header";
import InputItem from "../InputItem/InputItem";
import Itemlist from "../ItemList/Itemlist";
//uuid import
import { v4 as uuidv4 } from "uuid";

function ShoppingList() {
  const [shoppinglist, setShoppinglist] = useState([]);

  const handleAddItem = (itemName) => {
    setShoppinglist([
      ...shoppinglist,
      { id: uuidv4(), name: itemName, quantity: 1 },
    ]);
  };

  function addQuantity(itemId) {
    let newShoppingList = shoppinglist.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setShoppinglist(newShoppingList);
  }

  /* function removeUi(itemId){
  console.log('inside remove' );

  let newShoppingList = shoppinglist.filter((item) => item.id !== itemId);
  console.log(newShoppingList);
  setShoppinglist(newShoppingList); 
}

function removeQuantity(itemId){
  let newShoppingList = shoppinglist.map((item)=>{
  
      if(item.id===itemId && item.quantity<=0){
        showNotify('Removed item')
        removeUi(item.id);
        console.log('inside');
      }else if(item.id===itemId){
        return {...item ,quantity: item.quantity-1}
      }

    return item;

   })
   setShoppinglist(newShoppingList); 
 }
  */

 /*  function removeQuantity(itemId) {
    const updatedShoppingList = shoppinglist.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity-1 }
      }
      return item;
    });
    console.log(updatedShoppingList);
    setShoppinglist(updatedShoppingList);
    removeQuantityIfNegative(itemId);
  }

  function removeQuantityIfNegative(itemId){
  }
 */

  function removeQuantity(itemId){
    let updatedShoppingList = shoppinglist.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity-1 }
      }
      return item;
    });

   updatedShoppingList=  updatedShoppingList.filter((item)=> item.quantity>0)
      console.log(updatedShoppingList);
    setShoppinglist(updatedShoppingList);
  }

  return (
    <div className="shoppingList-wrapper">
      <Header />
      <InputItem addItem={handleAddItem} />
      <Itemlist
        addQuantity={addQuantity}
        removeQuantity={removeQuantity}
        shoppinglist={shoppinglist}
      />
    </div>
  );
}

export default ShoppingList;
