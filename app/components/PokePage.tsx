type Props = { poke: PokemonDetails };

import Image from "next/image";
import Link from "next/link";

const PokePage = ({ poke }: Props) => {
  const { name, id, types, stats, abilities, sprites } = poke || {};
  // const img = poke.sprites.front_default;
  return (
    <div className="relative  h-full w-full ">
      <div className="absolute top-5 left-0 w-full h-full -z-10">
        <img src="/assets/pokeball_2.png" alt="Pokeball" className="" />
      </div>
      <div className="p-2 mt-6 flex justify-between items-center w-full px-4 text-white">
        <div className="flex items-center">
          <Link href="/" className="hover:-translate-x-2 transition-all">
            <img src="/assets/Vector_2.svg" alt="Back to home" />
          </Link>
          <p className="font-bold text-2xl ml-2">{name}</p>
        </div>
        <span className="font-bold text-2xl">{`#${id}`}</span>
      </div>
      <div
        className={` relative m-2 mt-[160px] rounded-3xl bg-white p-3 flex flex-col items-center`}
      >
        <div className="flex justify-center items-center absolute -top-50">
          <Link href={""}>
            <img src="/assets/Vector.png" alt="pre pokemon " />
          </Link>
          <Image
            src={sprites?.front_default}
            alt="pokemon image"
            height={300}
            width={300}
          />
          <Link href={""}>
            <img src="/assets/Vectorright.png" alt=" next pokemon " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokePage;
