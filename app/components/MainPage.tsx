"use client";

import React from "react";
import {
  fetchAPkemonByID,
  fetchAPkemonByUrl,
  fetchPokemons,
} from "../utils/api";
import { useDebouncedCallback } from "use-debounce";
import { PokemonGridSkeleton } from "../utils/Skeletons";
import PokeCard from "./PokeCard";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import clsx from "clsx";

const MainPage = () => {
  const [Pokemons, setPokemons] = useState<PokemonDetails[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pre, setPre] = useState<string | null>(null);
  const [next, setNext] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=18"
  );

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const offset = searchParams.get("offset");

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

  useEffect(() => {
    if (!searchParams.get("offset") && !searchParams.get("limit")) {
      setPre(null);
      setNext("https://pokeapi.co/api/v2/pokemon?offset=20&limit=18");
    }
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
      } else if (searchParams.get("offset") && searchParams.get("limit")) {
        try {
          error && setError(null);
          const offset = searchParams.get("offset")?.trim() as string;
          const limit = searchParams.get("limit")?.trim() as string;
          setIsLoading(true);
          const data: Pokemon = await fetchAPkemonByUrl(
            `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
          );

          setNext(data.next);
          setPre(data.previous);
          const allPokemons = await Promise.all(
            data.results.map((pokemon) => fetchAPkemonByUrl(pokemon.url))
          );

          setPokemons(allPokemons);
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
    return <PokemonGridSkeleton count={6} />;
  }

  if (error) {
    return (
      <div className="p-4 inset-shadow-sm   bg-white mt-3 rounded-2xl justify-items-center ">
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div className="p-4 inset-shadow-sm  bg-white mt-3 rounded-2xl  ">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
        {Pokemons &&
          Pokemons.map((Pokemon) => {
            return <PokeCard pokemon={Pokemon} key={Pokemon.id} />;
          })}
      </div>
      <div
        className={clsx(" flex justify-between m-4", {
          hidden: searchParams.get("id") && Pokemons?.length == 1,
        })}
      >
        <button
          onClick={() => handelPre(pre)}
          className={clsx(
            " p-3 bg-Wireframe rounded-md font-semibold text-white ",
            {
              "cursor-not-allowed disabled bg-red-400": !pre,
              "cursor-pointer  bg-red-800": pre,
            }
          )}
        >
          Previous
        </button>
        <button
          onClick={() => handelNext(next)}
          className={clsx(
            " p-3 bg-Wireframe rounded-md  font-semibold cursor-pointer text-white",
            {
              "cursor-not-allowed bg-red-400": Number(offset) > 982 || !next,

              "cursor-pointer bg-red-800 ": next && Number(offset) < 982,
            }
          )}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MainPage;
