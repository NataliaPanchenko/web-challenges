export default function App() {
  function handleClick(text) {
    console.log(text + " button has been clicked!");
  }
  return (
    <div>
      <Button color="lightgreen" text={"Success"} onClick={handleClick} />
      <Button
        color="lightgreen"
        disabled
        text={"Success disabled"}
        onClick={handleClick}
      />
      <Button color="lightyellow" text={"Warning"} onClick={handleClick} />
      <Button
        color="lightyellow"
        disabled
        text={"Warning disabled"}
        onClick={handleClick}
      />
      <Button color="crimson" text={"Error"} onClick={handleClick} />
      <Button
        color="crimson"
        disabled
        text={"Error disabled"}
        onClick={handleClick}
      />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <div>
      <button
        disabled={disabled}
        style={{ backgroundColor: color }}
        onClick={() => onClick(text)}
      >
        {text}
      </button>
    </div>
  );
}
