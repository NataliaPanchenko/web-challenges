export default function App() {
  return <Sum valueA={5} valueB={2} />;
}

function Sum({ valueA, valueB }) {
  return (
    <div>
      <h1>
        {valueA} + {valueB} = {valueA + valueB}
      </h1>
    </div>
  );
}
