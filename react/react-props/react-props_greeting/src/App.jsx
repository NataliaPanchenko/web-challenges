export default function App() {
  return <Greeting name="Natalia" />;
}

function Greeting({ name }) {
  const coaches = ["Felix", "Klaus", "Roland"];
  const isCoach = coaches.includes(name);
  return <h1>Hello, {isCoach ? "coach" : name}!</h1>;
}
