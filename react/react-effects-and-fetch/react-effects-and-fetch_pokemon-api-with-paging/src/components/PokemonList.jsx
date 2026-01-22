import { useEffect, useState } from "react";

export default function PokemonList() {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${currentPage}`,
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [currentPage]);

  return (
    <main>
      <button
        type="button"
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={!data?.previous}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={!data?.next}
      >
        Next Page
      </button>
      <ul>
        {data?.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
