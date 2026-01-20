import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleIncrement() {
    setPeople((prev) => prev + 1);
  }

  function handleDecrement() {
    setPeople((prev) => Math.max(0, prev - 1));
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
