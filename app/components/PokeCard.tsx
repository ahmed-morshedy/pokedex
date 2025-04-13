import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  pokemon: PokemonDetails;
};

function PokeCard({ pokemon }: Props) {
  const { id, name } = pokemon;
  const img = pokemon.sprites.other.home.front_default;
  return (
    <Link href={`/pokemon/${id}`}>
      <div className=" relative shadow rounded-xl  w-[95px] md:w-[150px] h-[140px] md:h-[220px] overflow-hidden ">
        <span className=" absolute top-1 right-1 text-medium text-sm">{`#${id}`}</span>

        <Image
          src={img}
          width={150}
          height={150}
          alt={`pokemon ${name} image`}
          className=" absolute z-10 mt-4"
        />

        <div className="p-1 bg-light rounded-xl w-full h-[25px] md:h-[35px] bottom-0 absolute z-0 flex justify-center items-center ">
          <p className=" text-sm">{name}</p>
        </div>
      </div>
    </Link>
  );
}

export default PokeCard;
