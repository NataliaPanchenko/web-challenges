export default function App() {
  return <Greeting name="Natalia" />;
}

function Greeting({ name }) {
  const coaches = ["Felix", "Klaus", "Roland"];
  const isCoach = coaches.includes(name);
  return <div>Hello, {isCoach ? "Coach" : name}!</div>;
}
