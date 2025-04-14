import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import "./PokePage.css";
import clsx from "clsx";

type Props = { poke: PokemonDetails; species: PokemonSpecies };

const PokePage = ({ poke, species }: Props) => {
  let { name, id, types, stats, abilities, sprites, weight, height } =
    poke || {};

  let idPram = Number(useParams().id);

  const fType = types[0].type.name;

  const pokespecies = species.flavor_text_entries[8].flavor_text.replace(
    /[\n , \f]/g,
    " "
  );

  return (
    <div
      className={clsx("relative  min-h-screen w-full p-3", {
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
      })}
    >
      {/* Background Image */}

      <img
        src="/assets/pokeball_2.png"
        alt="Pokeball"
        className="absolute top-7 right-1 hidden md:right-7 md:block     "
      />

      {/* Title */}
      <div className="p-2 mt-6 flex justify-between items-center w-full px-4 text-white">
        <div className="flex items-center">
          <Link href="/" className="hover:-translate-x-2 transition-all">
            <img src="/assets/Vector_2.svg" alt="Back to home" />
          </Link>

          <p className="font-bold text-2xl ml-2">{name.toUpperCase()}</p>
        </div>
        <span className="font-bold text-2xl">{`#${id}`}</span>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center">
        {/* Previous  Pokemon */}
        <Link href={`/pokemon/${idPram - 1}`}>
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

        {/* Next Pokemon */}
        <Link href={`/pokemon/${idPram + 1}`}>
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
              className={clsx(
                "rounded-full px-3 py-1 mx-1 text-sm font-semibold text-white",
                {
                  "bg-pokemon-fire": type.type.name == "fire",
                  "bg-pokemon-grass": type.type.name == "grass",
                  "bg-pokemon-ghost": type.type.name == "ghost",
                  "bg-pokemon-normal": type.type.name == "normal",
                  "bg-pokemon-fighting": type.type.name == "fighting",
                  "bg-pokemon-water": type.type.name == "water",
                  "bg-pokemon-flying": type.type.name == "flying",
                  "bg-pokemon-poison": type.type.name == "poison",
                  "bg-pokemon-ground": type.type.name == "ground",
                  "bg-pokemon-rock": type.type.name == "rock",
                  "bg-pokemon-bug": type.type.name == "bug",
                  "bg-pokemon-dark": type.type.name == "dark",
                  "bg-pokemon-steel": type.type.name == "steel",
                  "bg-pokemon-ice": type.type.name == "ice",
                  "bg-pokemon-fairy": type.type.name == "fairy",
                  "bg-pokemon-psychic": type.type.name == "psychic",
                  "bg-pokemon-electric": type.type.name == "electric",
                  "bg-pokemon-dragon": type.type.name == "dragon",
                }
              )}
            >
              {type.type.name}
            </span>
          ))}
        </div>

        {/* About */}
        <div className="flex flex-col justify-center items-center mt-4">
          <span
            className={clsx(
              " rounded-full px-3 py-1 mx-1 text-2xl font-semibold ",
              {
                "text-pokemon-fire": fType == "fire",
                "text-pokemon-grass": fType == "grass",
                "text-pokemon-ghost": fType == "ghost",
                "text-pokemon-normal": fType == "normal",
                "text-pokemon-fighting": fType == "fighting",
                "text-pokemon-water": fType == "water",
                "text-pokemon-flying": fType == "flying",
                "text-pokemon-poison": fType == "poison",
                "text-pokemon-ground": fType == "ground",
                "text-pokemon-rock": fType == "rock",
                "text-pokemon-bug": fType == "bug",
                "text-pokemon-dark": fType == "dark",
                "text-pokemon-steel": fType == "steel",
                "text-pokemon-ice": fType == "ice",
                "text-pokemon-fairy": fType == "fairy",
                "text-pokemon-psychic": fType == "psychic",
                "text-pokemon-electric": fType == "electric",
                "text-pokemon-dragon": fType == "dragon",
              }
            )}
          >
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

          <p className="mt-3 px-2">{pokespecies}</p>
        </div>

        {/* Base Stats */}
        <div className="mt-4 w-full   flex flex-col items-center">
          <span
            className={clsx(
              " rounded-full px-3 py-1 mx-1 text-2xl font-semibold ",
              {
                "text-pokemon-fire": fType == "fire",
                "text-pokemon-grass": fType == "grass",
                "text-pokemon-ghost": fType == "ghost",
                "text-pokemon-normal": fType == "normal",
                "text-pokemon-fighting": fType == "fighting",
                "text-pokemon-water": fType == "water",
                "text-pokemon-flying": fType == "flying",
                "text-pokemon-poison": fType == "poison",
                "text-pokemon-ground": fType == "ground",
                "text-pokemon-rock": fType == "rock",
                "text-pokemon-bug": fType == "bug",
                "text-pokemon-dark": fType == "dark",
                "text-pokemon-steel": fType == "steel",
                "text-pokemon-ice": fType == "ice",
                "text-pokemon-fairy": fType == "fairy",
                "text-pokemon-psychic": fType == "psychic",
                "text-pokemon-electric": fType == "electric",
                "text-pokemon-dragon": fType == "dragon",
              }
            )}
          >
            Base Stats
          </span>
          <table className="w-full">
            <tbody>
              {stats?.map((stat, index) => (
                <tr key={index} className="border-b border-[#8b6f47]">
                  {/* Stat Name */}
                  <td
                    className={clsx(
                      "py-2 pl-4 text-left whitespace-nowrap font-bold",
                      {
                        "text-pokemon-fire": fType == "fire",
                        "text-pokemon-grass": fType == "grass",
                        "text-pokemon-ghost": fType == "ghost",
                        "text-pokemon-normal": fType == "normal",
                        "text-pokemon-fighting": fType == "fighting",
                        "text-pokemon-water": fType == "water",
                        "text-pokemon-flying": fType == "flying",
                        "text-pokemon-poison": fType == "poison",
                        "text-pokemon-ground": fType == "ground",
                        "text-pokemon-rock": fType == "rock",
                        "text-pokemon-bug": fType == "bug",
                        "text-pokemon-dark": fType == "dark",
                        "text-pokemon-steel": fType == "steel",
                        "text-pokemon-ice": fType == "ice",
                        "text-pokemon-fairy": fType == "fairy",
                        "text-pokemon-psychic": fType == "psychic",
                        "text-pokemon-electric": fType == "electric",
                        "text-pokemon-dragon": fType == "dragon",
                      }
                    )}
                  >
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
                        className={clsx("h-4 rounded-full  ", {
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
                        })}
                        style={{
                          width: `${stat.base_stat}%`,
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
