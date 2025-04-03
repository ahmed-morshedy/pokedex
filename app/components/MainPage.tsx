import PokeCard from "./PokeCard";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div className="p-4 inset-shadow-sm grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-white m-4 rounded-2xl justify-items-center">
      <PokeCard
        name="Mew"
        id={2}
        img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      />
      <PokeCard
        name="Mew"
        id={2}
        img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      />
      <PokeCard
        name="Mew"
        id={2}
        img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      />
      <PokeCard
        name="Mew"
        id={2}
        img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      />
      <PokeCard
        name="Mew"
        id={2}
        img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      />
      <PokeCard
        name="Mew"
        id={2}
        img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      />
      <PokeCard
        name="Mew"
        id={2}
        img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      />{" "}
      <PokeCard
        name="Mew"
        id={2}
        img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      />
      <PokeCard
        name="Mew"
        id={2}
        img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      />
      <PokeCard
        name="Mew"
        id={2}
        img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      />
    </div>
  );
};

export default MainPage;
