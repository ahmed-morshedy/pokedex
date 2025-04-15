import Navigation from "./ui/navigation";
import MainPage from "./components/MainPage";
import { Suspense } from "react";
import { PokemonGridSkeleton } from "./utils/Skeletons";

export default function Home() {
  return (
    <div className=" bg-primary p-3 min-h-screen">
      <Navigation />
      <Suspense fallback={<PokemonGridSkeleton count={12} />}>
        <MainPage />
      </Suspense>
    </div>
  );
}
