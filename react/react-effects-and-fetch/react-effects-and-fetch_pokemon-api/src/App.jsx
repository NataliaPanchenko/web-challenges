import PokemonList from "./components/PokemonList";
import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, []);

  return <PokemonList pokemon={pokemon} />;
}
