import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍎 apple",
      color: "red",
    },
    {
      id: 3,
      name: "🍊 orange",
      color: "orange",
    },
    {
      id: 4,
      name: "🍏 green apple",
      color: "green",
    },
    {
      id: 5,
      name: "🍇 grapes",
      color: "purple",
    },
    {
      id: 6,
      name: "🥝 kiwi",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
