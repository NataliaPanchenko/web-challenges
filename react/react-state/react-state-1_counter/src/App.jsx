import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const handleCounterPlus = () => {
    setCounter(counter + 1);
  };
  const handleCounterMinus = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="container">
      <h1>{counter}</h1>
      <div className="button-container">
        <button type="button" onClick={handleCounterMinus}>
          -
        </button>
        <button type="button" onClick={handleCounterPlus}>
          +
        </button>
      </div>
    </div>
  );
}
