import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>
        <h2>First children 1️⃣</h2>
      </Button>
      <Button>
        <h2>Second children 2️⃣</h2>
      </Button>
      <Button>
        <h2>Third children 3️⃣</h2>
      </Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
