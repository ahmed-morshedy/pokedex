"use client";

import React from "react";

import { useState, useEffect } from "react";
import { fetchAPkemonTypeByName, fetchAPkemonTypes } from "../utils/api";
import TypeCard from "../components/typeCard";
import Image from "next/image";
import Link from "next/link";
import { TypeGridSkeleton } from "../utils/Skeletons";

const page = () => {
  const [PokemonTypes, setPokemonTypes] = useState<Pokemontype[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        error && setError(null);

        setIsLoading(true);
        const data: Pokemontypes = await fetchAPkemonTypes();
        const allTypes = await Promise.all(
          data.results.map((type) => fetchAPkemonTypeByName(type.name))
        );
        setPokemonTypes(allTypes);
      } catch (err) {
        setError("Failed to load Pokémon. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <TypeGridSkeleton count={18} />;
  }

  if (error) {
    return (
      <div className="p-4 inset-shadow-sm   bg-white mt-3 rounded-2xl justify-items-center ">
        <p>{error}</p>
      </div>
    );
  }
  return (
    <>
      <header>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8   ">
          <Link href="/" className=" flex items-center ">
            <img
              src="/assets/Vector_2.svg"
              alt="Back to home"
              className=" mr-4 hover:-translate-x-2 transition-all"
            />

            <Image
              src={"/assets/Pokeball.png"}
              alt="Pokeball"
              width={40}
              height={40}
            />

            <h1 className="text-3xl font-bold leading-tight ml-4 text-white">
              Pokédex
            </h1>
          </Link>
        </div>
      </header>
      <div className="p-4 inset-shadow-sm  bg-white mt-3 rounded-2xl mx-5 mb-6 ">
        <p className="text-2xl font-bold">Pokemon Types :</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {PokemonTypes?.map((pokemonType) => (
            <TypeCard key={pokemonType.id} pokemonType={pokemonType} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
