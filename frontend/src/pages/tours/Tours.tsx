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
import { FaFilterCircleXmark } from "react-icons/fa6";
import Footer from "../../components/footer/Footer";
import TourCard from "../../components/tourCard/TourCard";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { baseURL } from "../../config/apiConfig";
import { TypeInterface, ContinentInterface, TourInterface } from "../../components/types/Types";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Tours = () => {
  const [types, setTypes] = useState<TypeInterface[]>([]);
  const [continents, setContinents] = useState<ContinentInterface[]>([]);
  const [toursNoFilter, setToursNoFilter] = useState<TourInterface[]>([]);
  const [toursFilter, setToursFilter] = useState<TourInterface[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [reviewFilter, setReviewFilter] = useState("");
  const [priceFilter, setpriceFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  let ToursURL = `${baseURL}/tours/?page=${pageNumber}`;

  if (categoryFilter.length > 0 || searchParams.get("type")) {
    ToursURL = ToursURL + `&type=${searchParams.get("type")?.split(" ").join("+")}`;
  }
  if (countryFilter.length > 0 || searchParams.get("country")) {
    ToursURL = ToursURL + `&country=${searchParams.get("country")?.split(" ").join("+")}`;
  }
  if (reviewFilter.length > 0) {
    ToursURL = ToursURL + `&review=${searchParams.get("review")?.split(" ").join("+")}`;
  }
  if (priceFilter > 0) {
    ToursURL = ToursURL + `&from=${searchParams.get("from")?.split(" ").join("+")}`;
  }
  if (searchFilter.length > 0) {
    ToursURL = ToursURL + `&search=${searchFilter.split(" ").join("+")}`;
  }

  const fetchTypes = async () => {
    try {
      const res = await axios.get(`${baseURL}/types`);
      setTypes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchContinents = async () => {
    try {
      const res = await axios.get(`${baseURL}/continents`);
      setContinents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchToursFilter = async () => {
    try {
      const res = await axios.get(ToursURL);

      setToursFilter(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchToursNoFilter = async () => {
    try {
      const res = await axios.get(`${baseURL}/tours`);
      setToursNoFilter(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageNumber = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
    window.scroll({ top: 400, behavior: "smooth" });
    queryParams.set("page", value.toString());
    navigate({ search: queryParams.toString() });
  };

  const handleCategoryFilterUpdate = (filterValue: string) => {
    if (categoryFilter.length > 0) {
      queryParams.set("type", filterValue);
      navigate({ search: queryParams.toString() });
    } else {
      navigate({ search: queryParams.toString() });
    }
    window.scroll({ top: 400, behavior: "smooth" });
  };

  const handleCountryFilterUpdate = (filterValue: string) => {
    if (countryFilter.length > 0) {
      queryParams.set("country", filterValue);
      navigate({ search: queryParams.toString() });
    } else {
      navigate({ search: queryParams.toString() });
    }
    window.scroll({ top: 400, behavior: "smooth" });
  };

  const handleReviewFilterUpdate = (filterValue: string) => {
    if (reviewFilter.length > 0) {
      queryParams.set("review", filterValue);
      navigate({ search: queryParams.toString() });
    } else {
      queryParams.delete("review");
      navigate({ search: queryParams.toString() });
    }
    window.scroll({ top: 400, behavior: "smooth" });
  };

  const handlePriceFilterUpdate = (filterValue: string) => {
    if (priceFilter > 0) {
      queryParams.set("from", filterValue);
      navigate({ search: queryParams.toString() });
    } else {
      queryParams.delete("from");
      navigate({ search: queryParams.toString() });
    }
  };

  const handleSearchFilterUpdate = (filterValue: string) => {
    if (searchFilter.length > 0) {
      queryParams.set("search", filterValue);
      navigate({ search: queryParams.toString() });
    } else {
      queryParams.delete("search");
      navigate({ search: queryParams.toString() });
    }
  };

  const handleCleanFilter = () => {
    setCategoryFilter("");
    setCountryFilter("");
    setReviewFilter("");
    setSearchFilter("");
    setpriceFilter(0);
    queryParams.delete("type");
    queryParams.delete("country");

    navigate({ search: queryParams.toString() });
  };

  useEffect(() => {
    fetchTypes();
    fetchContinents();
    fetchToursNoFilter();
  }, []);

  useEffect(() => {
    fetchToursFilter();
  }, [pageNumber, searchParams]);

  useEffect(() => {
    handleCategoryFilterUpdate(categoryFilter);
  }, [categoryFilter]);

  useEffect(() => {
    handleCountryFilterUpdate(countryFilter);
  }, [countryFilter]);

  useEffect(() => {
    handleReviewFilterUpdate(reviewFilter);
  }, [reviewFilter]);

  useEffect(() => {
    handlePriceFilterUpdate(priceFilter as unknown as string);
  }, [priceFilter]);

  useEffect(() => {
    handleSearchFilterUpdate(searchFilter);
  }, [searchFilter]);

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
          <SearchFilter searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
          <div></div>
          <SliderFilter priceFilter={priceFilter} setPriceFilter={setpriceFilter} />
          <CategoryFilter
            options={types!}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
          />
          <DestFilter
            continents={continents}
            setCountryFilter={setCountryFilter}
            countryFilter={countryFilter}
          />
          <ReviewFilter reviewFilter={reviewFilter} setReviewFilter={setReviewFilter} />
        </div>
        <div className={styles.ct_tours}>
          <div className={styles.ct_tours_top}>
            <span className={styles.ct_clean_filter}>
              <FaFilterCircleXmark className={styles.icon_clean} onClick={handleCleanFilter} />
              {toursFilter.length} Tours
            </span>
            <div className={styles.ct_tours_top_sort}>
              <p>Sort by</p>
              <FaSortAlphaDown />
              <select className={styles.select_sort}>
                <option value="">Title</option>
                <option value="">Destination</option>
                <option value="">Review</option>
              </select>
            </div>
          </div>
          <div className={styles.ct_cards}>
            {toursFilter.map(tour => (
              <TourCard tour={tour} key={tour._id} />
            ))}
          </div>
          <div className={styles.ct_pagination}>
            <Pagination
              count={
                categoryFilter.length === 0 ||
                countryFilter.length === 0 ||
                reviewFilter.length === 0 ||
                priceFilter === 0 ||
                searchFilter.length === 0
                  ? Math.ceil(toursNoFilter.length / 9)
                  : Math.ceil(toursFilter.length / 9)
              }
              variant="outlined"
              onChange={handlePageNumber}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Tours;
