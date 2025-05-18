import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchAPkemonTypeByName } from "../utils/api";

type Props = {
  pokemonType: Pokemontype;
};

function TypeCard({ pokemonType }: Props) {
  const { id, name } = pokemonType;
  const img =
    pokemonType.sprites["generation-viii"]?.["sword-shield"]?.name_icon;
  if (!img) return null;
  return (
    <Link href={`/Pokemontypes/${name}`}>
      <div>
        <Image
          src={img}
          width={200}
          height={200}
          alt={`Type ${name} image`}
          className={`mt-4  `}
          priority={false}
          loading="lazy"
        />
      </div>
    </Link>
  );
}

export default TypeCard;
