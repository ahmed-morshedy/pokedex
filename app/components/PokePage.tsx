type Props = { poke: PokemonDetails | null };
import Link from "next/link";
import "./PokePage.css";
const PokePage = ({ poke }: Props) => {
  const { name, id, types, stats, abilities } = poke || {};
  return (
    <div className=" relative">
      <div className=" absolute top-5 flex justify-between">
        <div>
          <Link href="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
        <span>{`#${id}`}</span>
      </div>
    </div>
  );
};

export default PokePage;
