"use client";

import Image from "next/image";
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

type Props = {};

function Search({}: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("id", term);
    } else {
      params.delete("id");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 200);

  return (
    <>
      <div className=" flex justify-center items-center w-52 h-10 md:w-64 md:h-12 rounded-2xl bg-white p-4 inset-shadow-sm hover:inset-shadow-none hover:shadow-md">
        <Image
          src={"/assets/Vector.svg"}
          width={20}
          height={20}
          alt=" search icon"
          className="text-primary hover:cursor-pointer ml-2"
        />
        <input
          type="search"
          name="search"
          id="search"
          maxLength={3}
          max={3}
          placeholder="Search by number..."
          className="h-8  bg-white  w-[190px] focus:outline-none rounded-2xl px-2 md:w-64 md:h-10"
          onChange={(e) => {
            handleSearch(e.target.value.replace(/[^0-9]/g, ""));
          }}
        />
      </div>
    </>
  );
}

export default Search;
