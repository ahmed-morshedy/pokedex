import Navigation from "./ui/navigation";
import MainPage from "./components/MainPage";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className=" bg-primary p-3 min-h-screen">
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <MainPage />
      </Suspense>
    </div>
  );
}
