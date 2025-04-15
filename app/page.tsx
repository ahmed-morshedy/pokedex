import Navigation from "./ui/navigation";
import MainPage from "./components/MainPage";

export default function Home() {
  return (
    <div className=" bg-primary p-3 min-h-screen">
      <Navigation />
      <MainPage />
    </div>
  );
}
