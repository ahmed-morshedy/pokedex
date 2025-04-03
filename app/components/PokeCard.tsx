import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  id: number;
  img: string;
};

function PokeCard({ name, id, img }: Props) {
  return (
    <div className=" relative shadow-md rounded-xl flex justify-center items-center flex-col p-3  w-[80px] md:w-[150px] h-[158px] overflow-hidden ">
      <span className=" absolute top-1 right-1 text-medium text-sm">{`#${id}`}</span>
      <Image
        src={img}
        width={150}
        height={150}
        alt="pokemon image"
        className=" absolute z-10"
      />
      <div className="p-1 bg-light rounded-xl w-full h-[44px] bottom-0 absolute z-0">
        <p className=" text-center mt-3.5 text-sm">{name}</p>
      </div>
    </div>
  );
}

export default PokeCard;
