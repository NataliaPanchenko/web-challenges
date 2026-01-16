export default function App() {
  return (
    <div>
      <Smiley isHappy />
      <Smiley />
    </div>
  );
}

function Smiley({ isHappy }) {
  return (
    <div>
      <span>{isHappy ? "😊" : "😥"}</span>
    </div>
  );
}
