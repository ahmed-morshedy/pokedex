import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  pokemon: PokemonDetails;
};

function PokeCard({ pokemon }: Props) {
  const { id, name, types } = pokemon;
  const img = pokemon.sprites.other.home.front_default;

  if (id > 1000) return;

  const fType = types[0].type.name;
  return (
    <Link href={`/pokemon/${id}`}>
      <div
        className={clsx(
          " relative shadow rounded-xl  w-[95px] md:w-[150px] h-[140px] md:h-[220px] overflow-hidden ",
          {
            "bg-pokemon-fire": fType == "fire",
            "bg-pokemon-grass": fType == "grass",
            "bg-pokemon-ghost": fType == "ghost",
            "bg-pokemon-normal": fType == "normal",
            "bg-pokemon-fighting": fType == "fighting",
            "bg-pokemon-water": fType == "water",
            "bg-pokemon-flying": fType == "flying",
            "bg-pokemon-poison": fType == "poison",
            "bg-pokemon-ground": fType == "ground",
            "bg-pokemon-rock": fType == "rock",
            "bg-pokemon-bug": fType == "bug",
            "bg-pokemon-dark": fType == "dark",
            "bg-pokemon-steel": fType == "steel",
            "bg-pokemon-ice": fType == "ice",
            "bg-pokemon-fairy": fType == "fairy",
            "bg-pokemon-psychic": fType == "psychic",
            "bg-pokemon-electric": fType == "electric",
            "bg-pokemon-dragon": fType == "dragon",
          }
        )}
      >
        <span className=" absolute top-1 right-1 text-white text-sm">{`#${id}`}</span>

        <Image
          src={img}
          width={150}
          height={150}
          alt={`pokemon ${name} image`}
          className=" absolute z-10 mt-4"
        />

        <div className="p-1 bg-light  w-full h-[25px] md:h-[35px] bottom-0 absolute z-0 flex justify-center items-center ">
          <p className=" text-sm">{name.toUpperCase()}</p>
        </div>
      </div>
    </Link>
  );
}

export default PokeCard;
