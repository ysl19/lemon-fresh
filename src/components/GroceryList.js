import React, { useContext } from "react";
import GroceryContext from "./GroceryContext";

const GroceryList = () => {
  const { groceryList } = useContext(GroceryContext);

  return (
    <div className="m-8 p-4 border rounded-md shadow-xl bg-teal-200 border-black ">
      <h1 className="text-xl pb-4 font-extrabold text-center">GroceryList</h1>
      <ul className="flex flex-col mx-36 space-y-4">
        {groceryList.map((item, index) => (
          <>
            <li
              className="flex border rounded-xl shadow-xl py-4 px-4 bg-green-400 border-black justify-between items-center "
              key={index}
            >
              <span>
                {item.name}: {item.date}
              </span>
              <div className="flex justify-end gap-4">
                <button className="border border-black py-2 px-4 font-bold rounded-xl shadow-xl bg-yellow-300">Edit</button>
                <button className="border border-black py-2 px-4 font-bold rounded-xl shadow-xl bg-red-600">Remove</button>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
