import BannerGlobal from "./components/banner/BannerGlobal";
import Header from "./components/header/Header";
import BannerHome from "./components/banner/BannerHome";
import SearchBar from "./components/searchBar/SearchBar";
import TourCard from "./components/tourCard/TourCard";
import TypeCard from "./components/typeCard/TypeCard";
import DestCard from "./components/destCard/DestCard";

function App() {
  return (
    <>
      <Header />
      <BannerGlobal title="Tour Package" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "50px",
        }}
      >
        <DestCard />
        <DestCard />
        <DestCard />
      </div>
    </>
  );
}

export default App;
