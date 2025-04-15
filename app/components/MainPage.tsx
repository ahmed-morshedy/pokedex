"use client";

import React from "react";
import { fetchAPkemonByID, fetchPokemons } from "../utils/api";
import { PokemonGridSkeleton } from "../utils/Skeletons";
import PokeCard from "./PokeCard";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const MainPage = () => {
  const [Pokemons, setPokemons] = useState<PokemonDetails[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      if (Number(searchParams.get("id"))) {
        try {
          error && setError(null);
          const id = searchParams.get("id")?.trim() as string;
          setIsLoading(true);
          const data = await fetchAPkemonByID(id);
          setPokemons([data]);
        } catch (err) {
          setError("Failed to load Pokémon. Please try again later.");
        } finally {
          setIsLoading(false);
        }
      } else {
        try {
          setIsLoading(true);
          const data = await fetchPokemons();
          setPokemons(data);
        } catch (err) {
          setError("Failed to load Pokémon. Please try again later.");
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, [searchParams]);

  if (isLoading) {
    return <PokemonGridSkeleton count={12} />;
  }

  if (error) {
    return (
      <div className="p-4 inset-shadow-sm   bg-white mt-3 rounded-2xl justify-items-center ">
        <p>{error}</p>
        {/* <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => window.location.reload()}
        >
          Retry
        </button> */}
      </div>
    );
  }
  return (
    <div className="p-4 inset-shadow-sm grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 bg-white mt-3 rounded-2xl justify-items-center ">
      {Pokemons &&
        Pokemons.map((Pokemon) => {
          return <PokeCard pokemon={Pokemon} key={Pokemon.id} />;
        })}
    </div>
  );
};

export default MainPage;
