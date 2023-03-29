import React from "react";
import { useState, useContext } from "react";
import  GroceryContext from "./GroceryContext";

const ItemForm = ({ modalChange }) => {

  const { groceryList, setGroceryList } = useContext(GroceryContext);
  const [item, setItem] = useState({ id:1,  name: "", date: "" });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleClose = (e) => {
    e.preventDefault();
    modalChange(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    modalChange(false);
    const newItem = { ...item, id: groceryList.length + 1 };
    setGroceryList((prevList) => [...prevList, newItem]);

  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col justify-center space-y-6"
    >
      <label className="flex justify-start gap-x-6">
        Add Item:
        <input
          className="border border-black p-1"
          type="text"
          name="name"
          placeholder="Eggs"
          value={item.name}
          onChange={onChangeHandler}
        />
      </label>
      <label className="flex justify-start gap-x-6">
        Pick Date when Purchased:
        <input
          className="border border-black p-1 justify-end"
          type="date"
          name="date"
          value={item.date}
          onChange={onChangeHandler}
        />
      </label>
      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handleClose}
        >
          Close
        </button>
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default ItemForm;
