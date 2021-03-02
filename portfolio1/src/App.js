import { useState } from "react";
import Market from "./components/Market";
import AddItems from "./components/AddItems";
import './App.css';

import DeleteItems from "./components/DeleteItems";

export const Console = ({ items }) => {
  return <center><div>{JSON.stringify(items)}</div></center>;
};

export default function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState(["Apples", "Oranges", "Bananas"]);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    setValue("");
    setItems([...items, value]);
  };

  const handleDelete = (str) => {
    let newItems = [...items];
    newItems.pop();
    setItems(newItems);
  };

  return (
    <div className="App">
     <center> <Market items={items} /> </center>
     <center><AddItems value={value} handleValue={handleValue} handleAdd={handleAdd} /></center>
      <center><DeleteItems handleDelete={handleDelete} /></center>
      <center><Console items={items} /></center>
    </div>
  );
}
