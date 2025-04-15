import Image from "next/image";
import React from "react";
import Search from "./Search";
import Fillter from "./Fillter";
import { Suspense } from "react";

type Props = {};

function Navigation({}: Props) {
  return (
    <>
      <header>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8  flex items-center ">
          <Image
            src={"/assets/Pokeball.png"}
            alt="Pokeball"
            width={40}
            height={40}
          ></Image>
          <h1 className="text-3xl font-bold leading-tight ml-4 text-white">
            Pokédex
          </h1>
        </div>
      </header>
      <div className="flex justify-center items-center mt-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Search />
        </Suspense>
        <Fillter />
      </div>
    </>
  );
}

export default Navigation;
