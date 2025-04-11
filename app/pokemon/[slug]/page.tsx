"use client";

import PokePage from "@/app/components/PokePage";
import { fetchAPkemonByID } from "@/app/utils/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Params {
  slug?: string;
}

function PokemonPage() {
  const { slug } = useParams() as Params;
  const [pokemonData, setPokemonData] = useState<PokemonDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData(id: string) {
      try {
        setIsLoading(true);
        const data = await fetchAPkemonByID(id);
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData(slug ? slug : "1");
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return <PokePage poke={pokemonData} />;
}

export default PokemonPage;
