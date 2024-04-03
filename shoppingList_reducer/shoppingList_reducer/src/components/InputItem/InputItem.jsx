import React, { useContext, useEffect } from "react";
import "./InputItem.css";
import { showError, showSuccess } from "../../utils/showToasts";
import { useForm } from "react-hook-form";
import { ShoppingDispatchContext } from "../../providers/ShoppingContext";
function InputItem() {

  const {register, handleSubmit , formState: { errors }} = useForm();

  const dispatch = useContext(ShoppingDispatchContext);
  const handleFormSubmission = (data) => {
    dispatch({
      type: "add_item",
      itemName: data.item
    });
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
          {...register("item", { required: true, minLength: 3 })}
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
