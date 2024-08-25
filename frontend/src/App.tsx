import BannerGlobal from "./components/banner/BannerGlobal";
import Header from "./components/header/Header";
import BannerHome from "./components/banner/BannerHome";
import SearchBar from "./components/searchBar/SearchBar";
import TourCard from "./components/tourCard/TourCard";
import TypeCard from "./components/typeCard/TypeCard";
import DestCard from "./components/destCard/DestCard";
import AverageReviews from "./components/averageReviews/AverageReviews";
import ProgressBar from "./components/progressBar/ProgressBar";

function App() {
  return (
    <>
      <Header />
      <BannerGlobal title="Tour Package" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        <AverageReviews overallAverage={4} />
      </div>
    </>
  );
}

export default App;
