import "./styles.css";
import { useState } from "react";

export default function App() {
  const validCode = "🐡🐠🐋";
  const initialState = "";

  const [inputCode, setInputCode] = useState(initialState);

  function handleClick(emoji) {
    if (inputCode.length >= validCode.length) {
      console.log("Please try again");
      return inputCode;
    }
    setInputCode(inputCode + emoji);
    console.log(inputCode);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={() => {
          setInputCode(initialState) && console.log("Reset Code!");
        }}
      >
        Reset
      </button>

      {inputCode === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
