"use client";

import PokePage from "@/app/components/PokePage";
import { fetchAPkemonByID, fetchAPkemonSpeciesByID } from "@/app/utils/api";
import { PokePageSkeleton } from "@/app/utils/Skeletons";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Params {
  id?: string;
}

function PokemonPage() {
  const { id } = useParams() as Params;
  const [pokemonData, setPokemonData] = useState<PokemonDetails | null>(null);
  const [pokemonspecies, setPokemonspecies] = useState<PokemonSpecies | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData(id: string) {
      try {
        setIsLoading(true);
        const data = await fetchAPkemonByID(id);
        const speciesData = await fetchAPkemonSpeciesByID(id);
        setPokemonData(data);
        setPokemonspecies(speciesData);
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

  return (
    <>
      {pokemonData && pokemonspecies && (
        <PokePage poke={pokemonData} species={pokemonspecies} />
      )}
    </>
  );
}

export default PokemonPage;
