// PokemonCardSkeleton.tsx
export function PokemonCardSkeleton() {
  return (
    <div className="relative shadow rounded-xl flex justify-center items-center flex-col p-3 w-[80px] md:w-[150px] h-[120px] md:h-[180px] overflow-hidden animate-pulse">
      <span className="absolute top-1 right-1 w-8 h-4 bg-gray-200 rounded"></span>

      <div className=" z-10 w-[60px] h-[60px] md:w-[100px] md:h-[100px] flex justify-center items-center">
        <img src="/assets/shape.png" alt="" />
      </div>

      <div className="p-1 bg-gray-200 rounded-xl w-full h-[25px] md:h-[35px] bottom-0 absolute z-0 flex justify-center items-center">
        <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

// PokemonGridSkeleton.tsx
export function PokemonGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="p-4 inset-shadow-sm grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 bg-white m-4 rounded-2xl justify-items-center">
      {Array.from({ length: count }).map((_, index) => (
        <PokemonCardSkeleton key={index} />
      ))}
    </div>
  );
}
