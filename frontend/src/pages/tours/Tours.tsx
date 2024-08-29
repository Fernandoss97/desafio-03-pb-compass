import styles from "./tours.module.css";
import Header from "../../components/header/Header";
import BannerGlobal from "../../components/banner/BannerGlobal";
import SearchBar from "../../components/searchBar/SearchBar";
import SearchFilter from "../../components/searchFilter/SearchFilter";
import SliderFilter from "../../components/sliderFilter/SliderFilter";
import CategoryFilter from "../../components/categoryFilter/CategoryFilter";
import DestFilter from "../../components/destFilter/DestFilter";
import ReviewFilter from "../../components/reviewFilter/ReviewFilter";
import { FaSortAlphaDown } from "react-icons/fa";
import Footer from "../../components/footer/Footer";
import TourCard from "../../components/tourCard/TourCard";
import Pagination from "@mui/material/Pagination";

const Tours = () => {
  return (
    <div>
      <Header />
      <div className={styles.ct_banner}>
        <BannerGlobal title="Tour Package" />
        <div className={styles.ct_search}>
          <SearchBar />
        </div>
      </div>
      <section className={styles.main}>
        <div className={styles.filters}>
          <SearchFilter />
          <SliderFilter />
          <CategoryFilter options={["Adventure", "Beaches", "Food"]} />
          <DestFilter
            continents={[
              {
                "_id": "66ccce2409c07750d5289ed1",
                "name": "South America2",
                "countries": [
                  {
                    "_id": "66ccce1209c07750d5289ecf",
                    "name": "Brazil2",
                    "cities": ["66cccddf09c07750d5289ecd"],
                    "createdAt": "2024-08-26T18:48:50.254Z",
                    "updatedAt": "2024-08-26T18:48:50.254Z",
                    "__v": 0,
                  },
                ],
                "createdAt": "2024-08-26T18:49:08.488Z",
                "updatedAt": "2024-08-26T18:49:08.488Z",
                "__v": 0,
              },
              {
                "_id": "66ccc9ad97297f1c414b7458",
                "name": "South America",
                "countries": [
                  {
                    "_id": "66ccc99097297f1c414b7454",
                    "name": "Brazil",
                    "cities": ["66ccb4a1cebca8c7537ce4ec"],
                    "createdAt": "2024-08-26T18:29:36.184Z",
                    "updatedAt": "2024-08-26T18:29:36.184Z",
                    "__v": 0,
                  },
                ],
                "createdAt": "2024-08-26T18:30:05.420Z",
                "updatedAt": "2024-08-26T18:30:05.420Z",
                "__v": 0,
              },
            ]}
          />
          <ReviewFilter />
        </div>
        <div className={styles.ct_tours}>
          <div className={styles.ct_tours_top}>
            <span>16 Tours</span>
            <div className={styles.ct_tours_top_sort}>
              <p>Sort by</p>
              <FaSortAlphaDown />
              <select className={styles.select_sort}>
                <option value="">Teste</option>
                <option value="">Teste</option>
                <option value="">Teste</option>
              </select>
            </div>
          </div>
          <div className={styles.ct_cards}>
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
          </div>
          <div className={styles.ct_pagination}>
            <Pagination count={10} variant="outlined" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Tours;
