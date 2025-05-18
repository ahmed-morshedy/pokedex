"use client";

import React from "react";

import { useDebouncedCallback } from "use-debounce";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { fetchAPkemonTypeByName, fetchAPkemonTypes } from "../utils/api";
import TypeCard from "../components/typeCard";
import Image from "next/image";
import Link from "next/link";
import { TypeGridSkeleton } from "../utils/Skeletons";

const page = () => {
  const [PokemonTypes, setPokemonTypes] = useState<Pokemontype[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
  }, [searchParams]);

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
