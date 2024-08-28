import BannerGlobal from "./components/banner/BannerGlobal";
import Header from "./components/header/Header";
import BannerHome from "./components/banner/BannerHome";
import SearchBar from "./components/searchBar/SearchBar";
import TourCard from "./components/tourCard/TourCard";
import TypeCard from "./components/typeCard/TypeCard";
import DestCard from "./components/destCard/DestCard";
import AverageReviews from "./components/averageReviews/AverageReviews";
import ProgressBar from "./components/progressBar/ProgressBar";
import Footer from "./components/footer/Footer";
import Subtitle from "./components/subtitle/Subtitle";
import SearchFilter from "./components/searchFilter/SearchFilter";
import SliderFilter from "./components/sliderFilter/SliderFilter";
import CategoryFilter from "./components/categoryFilter/CategoryFilter";
import DestFilter from "./components/destFilter/DestFilter";
import ReviewFilter from "./components/reviewFilter/ReviewFilter";
import BookSettings from "./components/bookSettings/BookSettings";
import TourInfo from "./components/tourInfo/TourInfo";
import ReviewCard from "./components/reviewCard/ReviewCard";

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
        <ReviewCard />
      </div>
    </>
  );
}

export default App;
