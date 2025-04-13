interface Pokemon {
  count: number;
  next: string;
  previous: string;
  results: { name: string; url: string }[];
}

interface Other {
  home: { front_default: string };
  dream_world: { front_default: string };
}
interface Moves {
  move: { name: string };
}

interface Abilities {
  ability: { name: string };
}

interface Stats {
  base_stat: number;
  stat: { name: string };
}
interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  moves: Moves[];
  types: Array<{ type: { name: string } }> | null;
  abilities: Abilities[];
  stats: Stats[];
  sprites: {
    front_default: string;
    back_default: string | null;
    front_shiny: string | null;
    back_shiny: string | null;
    other: Other;
  };
}
