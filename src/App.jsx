import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 text-black font-bold p-4 rounded">
        Tailwind Test
      </h1>
    </>
  );
}

export default App;
