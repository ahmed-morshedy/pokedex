import Image from "next/image";
import Navigation from "./ui/navigation";
import MainPage from "./components/MainPage";

export default function Home() {
  return (
    <div>
      <Navigation />
      <MainPage />
    </div>
  );
}
