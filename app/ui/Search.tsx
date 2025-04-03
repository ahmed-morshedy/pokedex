import Image from "next/image";
import React from "react";

type Props = {};

function Search({}: Props) {
  return (
    <>
      <div className=" flex justify-center items-center w-48 h-8 md:w-64 md:h-12 rounded-2xl bg-white p-4 inset-shadow-sm hover:inset-shadow-none hover:shadow-md">
        <Image
          src={"/assets/Vector.svg"}
          width={16}
          height={16}
          alt=" search icon"
          className="text-primary hover:cursor-pointer"
        />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="h-6  bg-white  w-40 focus:outline-none rounded-2xl px-2 md:w-64 md:h-10"
        />
      </div>
    </>
  );
}

export default Search;
