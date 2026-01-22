import { useEffect, useState } from "react";

const PAGE_SIZE = 20;

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page * PAGE_SIZE}`,
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, [page]);

  return (
    <main>
      <button
        type="button"
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 0}
      >
        Previous Page
      </button>
      <button type="button" onClick={() => setPage((prev) => prev + 1)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
