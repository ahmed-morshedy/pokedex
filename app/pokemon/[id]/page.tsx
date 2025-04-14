"use client";

import PokePage from "@/app/components/PokePage";
import { fetchAPkemonByID } from "@/app/utils/api";
import { PokePageSkeleton } from "@/app/utils/Skeletons";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Params {
  id?: string;
}

function PokemonPage() {
  const { id } = useParams() as Params;
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

    fetchData(id ? id : "1");
  }, [id]);

  if (isLoading) {
    return <PokePageSkeleton />;
  }

  return <>{pokemonData && <PokePage poke={pokemonData} />}</>;
}

export default PokemonPage;
