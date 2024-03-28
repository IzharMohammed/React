import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faMinus } from '@fortawesome/free-solid-svg-icons'
function Itemlist({shoppinglist}) {
  return (
<div >
{
  shoppinglist.map((item)=> {
  return(
    <div key={shoppinglist.id}>
    {/* <FontAwesomeIcon icon={faPlus} /> */}
     <Item  itemName={item.name} quantity={item.quantity}/>
     {/* <FontAwesomeIcon icon={faMinus} /> */}
   
     </div>
   )
    
   } )
}
</div >
  )
}

export default Itemlist