import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "test",
    age: 10,
  };

  let newArray = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-green-500 text-black font-bold p-4 rounded">
        Tailwind Test
      </h1>
      <Card userName="Soni" someObj={myObj} />
    </>
  );
}

export default App;
