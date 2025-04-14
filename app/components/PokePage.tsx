type Props = { poke: PokemonDetails };

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import "./PokePage.css";

const PokePage = ({ poke }: Props) => {
  let { name, id, types, stats, abilities, sprites, weight, height, moves } =
    poke || {};

  let idPram = Number(useParams().id);

  const handelClick = (e: React.MouseEvent) => {
    idPram = idPram + 1;
    console.log(idPram);
  };

  return (
    <div className="relative  min-h-svh w-full bg-amber-600 p-3">
      <img
        src="/assets/pokeball_2.png"
        alt="Pokeball"
        className="absolute top-7 right-1 md:right-7  -z-10"
      />

      {/* Title */}
      <div className="p-2 mt-6 flex justify-between items-center w-full px-4 text-white">
        <div className="flex items-center">
          <Link href="/" className="hover:-translate-x-2 transition-all">
            <img src="/assets/Vector_2.svg" alt="Back to home" />
          </Link>

          <p className="font-bold text-2xl ml-2">{name}</p>
        </div>
        <span className="font-bold text-2xl">{`#${id}`}</span>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center">
        <Link href={""}>
          <img
            src="/assets/Vectorl.svg"
            alt="pre pokemon "
            className={`   stroke-3 hover:-translate-x-2 transition-all ${
              id === 1 ? "hidden" : ""
            }`}
          />
        </Link>

        <Image
          src={sprites?.other.dream_world.front_default}
          alt="pokemon image"
          height={150}
          width={150}
          className=" mx-10 max-w-fit "
        />

        <Link href={""}>
          <img
            src="/assets/Vectorr.svg"
            alt=" next pokemon "
            className=" stroke-3 hover:translate-x-2 transition-all "
          />
        </Link>
      </div>

      {/* Card */}
      <div
        className={` relative  mb-2 rounded-3xl bg-white p-3 flex flex-col items-center`}
      >
        {/* Types */}
        <div className="flex justify-center items-center ">
          {types?.map((type, index) => (
            <span
              key={index}
              className="bg-medium rounded-full px-3 py-1 mx-1 text-sm font-semibold text-white"
            >
              {type.type.name}
            </span>
          ))}
        </div>

        {/* About */}
        <div className="flex flex-col justify-center items-center mt-4">
          <span className=" rounded-full px-3 py-1 mx-1 text-2xl font-semibold text-Wireframe">
            About
          </span>

          {/* Attribute */}
          <div className="flex justify-between items-center mt-4 w-full">
            {/* Weight */}
            <div className="flex flex-col justify-between items-center ">
              <div className=" flex justify-between items-center ">
                <img
                  src="/assets/weight.svg"
                  alt="weight svg"
                  className=" stroke-3 w-7"
                />
                <span>{`${weight}kg`}</span>
              </div>
              <p className=" text-medium text-sm mt-3">Weight</p>
            </div>

            <img src="/assets/Divider.svg" alt="line" className=" mx-3 h-16" />

            {/* Height */}
            <div className="flex flex-col justify-between items-center ">
              <div className=" flex justify-between items-center ">
                <img
                  src="/assets/straighten.svg"
                  alt="weight svg"
                  className=" stroke-3 w-7"
                />
                <span>{height}m</span>
              </div>
              <p className=" text-medium text-sm mt-3">Height</p>
            </div>

            <img src="/assets/Divider.svg" alt="line" className=" mx-3 h-16 " />

            {/* Moves */}
            <div className="flex flex-col justify-between items-center ">
              {abilities.map((move, index) => (
                <span key={index} className="">
                  {`${move.ability.name}`}
                </span>
              ))}
              <p className=" text-medium text-sm mt-3">Moves</p>
            </div>
          </div>
        </div>

        {/* Base Stats */}
        <div className="mt-4 w-full   flex flex-col items-center">
          <span className=" rounded-full px-3 py-1 mx-1 text-2xl font-semibold text-Wireframe">
            Base Stats
          </span>
          <table className="w-full">
            <tbody>
              {stats?.map((stat, index) => (
                <tr key={index} className="border-b border-[#8b6f47]">
                  {/* Stat Name */}
                  <td className="py-2 pl-4 text-left whitespace-nowrap">
                    {stat.stat.name.toUpperCase()}
                  </td>

                  {/* Stat Value */}
                  <td className="py-2 pl-4 text-center">{stat.base_stat}</td>

                  {/* Stat Bar */}
                  <td className="py-2 pl-4 w-1/2">
                    <div
                      className="h-4 rounded-full"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        border: "1px solid black",
                        borderRadius: "9999px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className="h-4 rounded-full"
                        style={{
                          width: `${stat.base_stat}%`,
                          backgroundColor: "#6b8e23",
                          backgroundImage:
                            "linear-gradient(to right, #6b8e23, #556b2f)",
                          borderRadius: "9999px",
                          boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.3)",
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PokePage;
