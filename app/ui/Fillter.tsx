import React from "react";

type Props = {};

export default function Fillter({}: Props) {
  return (
    <div>
      <button className="bg-white hover:cursor-pointer inset-shadow-sm text-primary font-bold py-2 px-4 rounded-full ml-6 hover:inset-shadow-none hover:shadow-md">
        #
      </button>
    </div>
  );
}
