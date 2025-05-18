"use client";

import React from "react";

import { useDebouncedCallback } from "use-debounce";

import {
  useSearchParams,
  useRouter,
  usePathname,
  useParams,
} from "next/navigation";
import { useState, useEffect } from "react";
import clsx from "clsx";

import Image from "next/image";
import { PokemonGridSkeleton } from "@/app/utils/Skeletons";
import { fetchAPkemonByUrl, fetchAPkemonTypeByName } from "@/app/utils/api";
import Link from "next/link";
import PokeCard from "@/app/components/PokeCard";

const page = () => {
  const [Pokemons, setPokemons] = useState<PokemonDetails[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handelNext = useDebouncedCallback((href) => {
    if (!href) return;

    const parsedUrl = new URL(href);

    const offset: string | number = parsedUrl.searchParams.get("offset") ?? "0";
    if (Number(offset) > 1000) return;

    const limit = parsedUrl.searchParams.get("limit");
    const params = new URLSearchParams(searchParams);

    if (offset) {
      params.set("offset", offset);
    } else {
      params.delete("offset");
    }
    if (limit) {
      params.set("limit", limit);
    } else {
      params.delete("limit");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 200);

  const handelPre = useDebouncedCallback((href) => {
    if (!href) return;
    const parsedUrl = new URL(href);

    const offset: string | number = parsedUrl.searchParams.get("offset") ?? "0";
    const limit = parsedUrl.searchParams.get("limit");
    const params = new URLSearchParams(searchParams);

    if (offset) {
      params.set("offset", offset);
    } else {
      params.delete("offset");
    }
    if (limit) {
      params.set("limit", limit);
    } else {
      params.delete("limit");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 200);
  const type = useParams().type;

  useEffect(() => {
    const fetchData = async () => {
      try {
        error && setError(null);

        setIsLoading(true);
        const data: Pokemontype = await fetchAPkemonTypeByName(String(type));

        const allPokemons = await Promise.all(
          data.pokemon.map((pokemon) => fetchAPkemonByUrl(pokemon.pokemon.url))
        );
        setPokemons(allPokemons);
      } catch (err) {
        setError("Failed to load Pokémon. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  if (isLoading) {
    return <PokemonGridSkeleton count={18} />;
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
          <Link href="/Pokemontypes" className=" flex items-center ">
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
        <p className="text-2xl font-bold">
          Pokemon Types :{" "}
          <span
            className={clsx("  p-2 rounded-xl text-white", {
              "bg-pokemon-fire": type == "fire",
              "bg-pokemon-grass": type == "grass",
              "bg-pokemon-ghost": type == "ghost",
              "bg-pokemon-normal": type == "normal",
              "bg-pokemon-fighting": type == "fighting",
              "bg-pokemon-water": type == "water",
              "bg-pokemon-flying": type == "flying",
              "bg-pokemon-poison": type == "poison",
              "bg-pokemon-ground": type == "ground",
              "bg-pokemon-rock": type == "rock",
              "bg-pokemon-bug": type == "bug",
              "bg-pokemon-dark": type == "dark",
              "bg-pokemon-steel": type == "steel",
              "bg-pokemon-ice": type == "ice",
              "bg-pokemon-fairy": type == "fairy",
              "bg-pokemon-psychic": type == "psychic",
              "bg-pokemon-electric": type == "electric",
              "bg-pokemon-dragon": type == "dragon",
            })}
          >
            {String(type)?.toUpperCase()}
          </span>
        </p>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center mt-5">
          {Pokemons?.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
