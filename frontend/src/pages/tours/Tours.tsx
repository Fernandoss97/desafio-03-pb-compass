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
import axios from "axios";
import { baseURL } from "../../config/apiConfig";
import { TypeInterface } from "../../components/types/Types";
import { useEffect, useState } from "react";

const Tours = () => {
  const [types, setTypes] = useState<TypeInterface[]>();

  const fetchTypes = async () => {
    try {
      const res = await axios.get(`${baseURL}/types`);
      setTypes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTypes();
  }, []);

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
          <CategoryFilter options={types!} />
          {/* <DestFilter/> */}
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
          <div className={styles.ct_cards}>{/* <TourCard /> */}</div>
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
