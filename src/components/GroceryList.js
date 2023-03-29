import React, { useContext } from "react";
import GroceryContext from "./GroceryContext";

const GroceryList = () => {
  const { groceryList, setGroceryList } = useContext(GroceryContext);

  const onEditHandler = () => {};

  const onRemoveHandler = (itemID) => {
    setGroceryList((prevItem) => {
      const filteredList = prevItem.filter((item) => item.id !== itemID);
      
      const updatedList = filteredList.map((item, index) => ({
        ...item,
        id: index + 1,
      }))
      return updatedList;
    })
  };

  return (
    <div className="m-8 p-4 border rounded-md shadow-xl bg-teal-200 border-black ">
      <h1 className="text-xl pb-4 font-extrabold text-center">GroceryList</h1>
      <ul className="flex flex-col mx-36 space-y-4">
        {groceryList.map((item, index) => (
          <li
            className="flex border rounded-xl shadow-xl py-4 px-4 bg-green-400 border-black justify-between items-center "
            key={item.id}
          >
            <span>
              {item.name}: {item.date} : {item.id}
            </span>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => onEditHandler(item.id)}
                className="border border-black py-2 px-4 font-bold rounded-xl shadow-xl bg-yellow-300"
              >
                Edit
              </button>
              <button
                onClick={() => onRemoveHandler(item.id)}
                className="border border-black py-2 px-4 font-bold rounded-xl shadow-xl bg-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
