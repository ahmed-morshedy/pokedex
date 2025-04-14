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

export const PokePageSkeleton = () => {
  return (
    <div className="relative h-full w-full animate-pulse">
      <img
        src="/assets/pokeball_2.png"
        alt="Pokeball"
        className="absolute top-7 right-1 md:right-7 -z-10"
      />

      {/* Title */}
      <div className="p-2 mt-6 flex justify-between items-center w-full px-4 text-white">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full" />
          <div className="ml-2 h-6 w-24 bg-gray-300 rounded" />
        </div>
        <div className="h-6 w-16 bg-gray-300 rounded" />
      </div>

      {/* Image */}
      <div className="flex justify-center items-center mt-4">
        <div className="w-6 h-6 bg-gray-300 rounded" />
        <div className="mx-10 h-[150px] w-[150px] bg-gray-300 rounded-full" />
        <div className="w-6 h-6 bg-gray-300 rounded" />
      </div>

      {/* Card */}
      <div className="relative mx-2 mb-2 rounded-3xl bg-white p-3 flex flex-col items-center">
        {/* Types */}
        <div className="flex space-x-2 mt-2">
          {[...Array(2)].map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-300 rounded-full px-6 py-2 text-sm"
            />
          ))}
        </div>

        {/* About */}
        <div className="flex flex-col justify-center items-center mt-4">
          <div className="rounded-full px-6 py-2 bg-gray-200 text-2xl mb-4" />
          {/* Attribute */}
          <div className="flex justify-between items-center mt-4 w-full px-6">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between items-center w-full mx-2"
              >
                <div className="w-8 h-8 bg-gray-300 rounded-full mb-2" />
                <div className="w-16 h-4 bg-gray-200 rounded mb-1" />
                <div className="w-12 h-3 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Base Stats */}
        <div className="mt-6 w-full flex flex-col items-center">
          <div className="rounded-full px-6 py-2 bg-gray-200 text-2xl mb-4" />
          <div className="w-full space-y-3 px-4">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="w-24 h-4 bg-gray-300 rounded" />
                <div className="w-12 h-4 bg-gray-300 rounded" />
                <div className="flex-1 h-4 bg-gray-200 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
