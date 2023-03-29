import "./App.css";
import Navbar from "./components/Navbar";
import AddTodoForm from "./components/AddTodoForm";
import GroceryList from "./components/GroceryList";
import GroceryContext from "./components/GroceryContext";

import { useState } from "react";

function App() {
  const [groceryList, setGroceryList] = useState([]);

  return (
    <div className="App container mx-auto">
      <GroceryContext.Provider value={{ groceryList, setGroceryList }}>
        <Navbar />
        <AddTodoForm />
        <GroceryList />
      </GroceryContext.Provider>
    </div>
  );
}

export default App;
