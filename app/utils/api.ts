export async function fetchPokemons(): Promise<PokemonDetails[]> {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=18"
    );

    const pokemonData: Pokemon = await response.json();

    const allPokemons = await Promise.all(
      pokemonData.results.map((pokemon) => fetchAPkemonByUrl(pokemon.url))
    );

    return allPokemons;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    throw error; // or return an empty array depending on your needs
  }
}

export async function fetchAPkemonByUrl(url: string): Promise<any> {
  try {
    const response = await fetch(url);

    const pokemonData = await response.json();

    return pokemonData;
  } catch (error) {
    // Enhanced error logging
    console.error("Error fetching Pokémon details:", {
      error: error instanceof Error ? error.message : error,
      url,
    });
    throw error; // Re-throw to allow caller to handle it
  }
}

export async function fetchAPkemonByID(id: string): Promise<any> {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const pokemonData: PokemonDetails = await data.json();

  return pokemonData;
}

export async function fetchAPkemonSpeciesByID(id: string): Promise<any> {
  const pokemonSpecies = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  const speciesData: PokemonSpecies = await pokemonSpecies.json();

  return speciesData;
}

export async function fetchAPkemonTypes(): Promise<any> {
  const pokemonType = await fetch(`https://pokeapi.co/api/v2/type/`);
  const typeData: Pokemontypes = await pokemonType.json();

  return typeData;
}

export async function fetchAPkemonTypeByName(name: string): Promise<any> {
  const pokemonType = await fetch(`https://pokeapi.co/api/v2/type/${name}`);
  const typeData: Pokemontype = await pokemonType.json();

  return typeData;
}
