"use client";

import { fetchAPkemonByUrl, fetchPokemons } from "../utils/api";
import PokeCard from "./PokeCard";
import { useState, useEffect } from "react";

const MainPage = () => {
  const [Pokemons, setPokemons] = useState<PokemonDetails[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemons();
      setPokemons(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 inset-shadow-sm grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 bg-white m-4 rounded-2xl justify-items-center">
      {Pokemons.map((Pokemon) => {
        return <PokeCard pokemon={Pokemon} key={Pokemon.id} />;
      })}
    </div>
  );
};

export default MainPage;
