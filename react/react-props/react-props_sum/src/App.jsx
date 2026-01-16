export default function App() {
  return <Sum valueA={5} valueB={2} />;
}

function Sum({ valueA, valueB }) {
  return (
    <div>
      <span>
        ValueA = {valueA}, valueB = {valueB}
      </span>
      <br />
      <span>Sum = {valueA + valueB}</span>
    </div>
  );
}
