import React, { useEffect } from "react";
import "./InputItem.css";
import { showError, showSuccess } from "../../utils/showToasts";
import { useForm } from "react-hook-form";
/* 
function InputItem({ addItem }) {
  const [itemName, setItemName] = useState("");
  const { register, handleSubmit } = useForm();
  const handleFormSubmit = (data) => {
    data.preventDefault()
    console.log(data);
    addItem(itemName);
    setItemName("");
    showSuccess("Successfully added");
    console.log(itemName);
  };

  return (
    <div className="item-input-wrapper">
      <form onSubmit={handleFormSubmit}>
        <input
          className="item-input"
          type="text"
          name="item"
          {...register("item", { required: true, maxLength: 3 })}
          placeholder="Add An Item..."
        />
          <button  onClick={(e)=>setItemName(e.target.value)} className="item-input-button">  Add </button>
      </form>
    </div>
  );
} */

function InputItem({ addItem }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

/*   useEffect(()=>{
    console.log(errors);
    if(errors.item && errors.item.type =='required'){
      showError("Item cannot be empty")
    }
    
    if(errors.item && errors.item.type =='minLength'){
      showError("Item length cannot be less than 3")
    }

  },[errors.item && errors.item.type])
 */
  const handleFormSubmission = (data) => {
    addItem(data.item);
    showSuccess("Successfully added");
  };

  return (
    <div className="item-input-wrapper">
      <form onSubmit={handleSubmit(handleFormSubmission)}>
        <input
          className="item-input"
          placeholder="Add An Item..."
          type="text"
          name="item"
          {...register("item", { required: true, minLength : 3 })}
        />



        <button className="item-input-button"> Add</button>
        <div>
          {errors.item && errors.item.type === "required" && (
            <p>Item is missing</p>
          )}

          {errors.item && errors.item.type === "minLength" && (
            <p>Item name cannot be less than 3 </p>
          )}
        </div>
      </form>

  

    </div>
  );
}

export default InputItem;
