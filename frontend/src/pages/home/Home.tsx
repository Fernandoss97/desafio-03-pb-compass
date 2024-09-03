import styles from "./home.module.css";
import Header from "../../components/header/Header";
import BannerHome from "../../components/banner/BannerHome";
import SearchBar from "../../components/searchBar/SearchBar";
import Subtitle from "../../components/subtitle/Subtitle";
import Slider from "react-slick";
import TourCard from "../../components/tourCard/TourCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TypeCard from "../../components/typeCard/TypeCard";
import DestCard from "../../components/destCard/DestCard";
import { FiPlayCircle } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { RxQuote } from "react-icons/rx";
import { FaHiking } from "react-icons/fa";
import { BsSuitcase } from "react-icons/bs";
import { GiMountainClimbing } from "react-icons/gi";
import { FaSwimmer } from "react-icons/fa";
import { GiCycling } from "react-icons/gi";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { TourInterface, CityInterface, TypeInterface } from "../../components/types/Types";
import { baseURL } from "../../config/apiConfig";

const Home = () => {
  const [tours, setTours] = useState<TourInterface[]>();
  const [cities, setCities] = useState<CityInterface[]>();
  const [types, setTypes] = useState<TypeInterface[]>();

  const mostPopularTours = tours?.slice(0, 8);
  const topCities = cities?.slice(0, 8);

  const settingsTour = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  const settingsType = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };

  const fetchTours = async () => {
    try {
      const res = await axios.get(`${baseURL}/tours?page=1`);
      setTours(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCities = async () => {
    try {
      const res = await axios.get(`${baseURL}/cities`);
      setCities(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTypes = async () => {
    try {
      const res = await axios.get(`${baseURL}/types`);
      setTypes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
    fetchCities();
    fetchTypes();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.ct_banner}>
        <BannerHome />
        <div className={styles.ct_search}>
          <SearchBar />
        </div>
      </div>
      <section className={styles.most_popular}>
        <Subtitle title="Most Popular Tours" subtitle="Tours" />
        <div className={styles.ct_slider}>
          <Slider {...settingsTour}>
            {mostPopularTours?.map(tour => (
              <div key={tour._id}>
                <TourCard tour={tour} />
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.overall_data}>
          <div className={styles.data}>
            <span>120+</span>
            <p>Total Destination</p>
          </div>
          <div className={styles.data}>
            <span>500+</span>
            <p>Travel Packages</p>
          </div>
          <div className={styles.data}>
            <span>12k+</span>
            <p>Total Travelers</p>
          </div>
          <div className={styles.data}>
            <span>7k+</span>
            <p>Positive Reviews</p>
          </div>
        </div>
      </section>
      <section className={styles.top_dest}>
        <Subtitle subtitle="Destination" title="Top Attractions Destinations" />
        <div className={styles.ct_dest}>
          {topCities?.map(city => (
            <DestCard city={city} key={city._id} />
          ))}
        </div>
      </section>
      <section className={styles.ct_contact}>
        <div className={styles.ct_img}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/Group%201%20(1).jpg?alt=media&token=e65395c0-6060-40bc-8fd2-c8466d3cf84c"
            alt=""
          />
          <div className={styles.ct_watch}>
            <FiPlayCircle className={styles.play_icon} />
            <p>Watch Now</p>
          </div>
        </div>
        <div className={styles.choose}>
          <div className={styles.choose_top}>
            <h3>Why Choose Us</h3>
            <div className={styles.choose_det}></div>
          </div>
          <h2>Our Experiences Meet High Quality Standarts</h2>
          <p>
            Holisticly optimize proactive strategic theme areas rather than effective manufactured
            products create.
          </p>
          <div className={styles.choose_cheap}>
            <div className={styles.choose_col}>
              <div className={styles.choose_line}>
                <GiCheckMark className={styles.check_icon} />
                <span>Travel Plan</span>
              </div>
              <div className={styles.choose_line}>
                <GiCheckMark className={styles.check_icon} />
                <span>Hand-picked Tour</span>
              </div>
            </div>
            <div className={styles.choose_col}>
              <div className={styles.choose_line}>
                <GiCheckMark className={styles.check_icon} />
                <span>Cheap Rates</span>
              </div>
              <div className={styles.choose_line}>
                <GiCheckMark className={styles.check_icon} />
                <span>Private Guide</span>
              </div>
            </div>
          </div>
          <button>Contact Us</button>
        </div>
      </section>
      <section className={styles.category}>
        <Subtitle subtitle="Browse By Category" title="Pick A Tour Type" />
        <div className={styles.ct_slider_type}>
          <Slider {...settingsType}>
            {types?.map(type => (
              <div key={type._id}>
                <TypeCard type={type} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className={styles.testimonials}>
        <div className={styles.img_test}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/Group%201%20(1).svg?alt=media&token=c2b79ec5-280c-42f9-a79d-071900debba2"
            alt=""
          />
        </div>
        <div className={styles.text_test}>
          <Subtitle subtitle="Testimonials" title="What Travelers Say" />
          <div className={styles.parag_test}>
            <RxQuote className={styles.icon_quote} />
            <p>
              “The UI designs he crafted are top-notch, and the design system he integrated allows
              for straight forward fixes and bulk updates throughout almost every area of the app.”{" "}
            </p>
            <span>-By Molie Rosa, Photographer</span>
          </div>
        </div>
      </section>
      <section className={styles.updates}>
        <Subtitle subtitle="Updates" title="Latest Travel Guide" />
        <div className={styles.posts}>
          <div className={styles.post_col}>
            <div className={styles.post}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/photo-1464746133101-a2c3f88e0dd9.jfif?alt=media&token=900a6088-39d2-43dd-a1f5-50bebbaddaa5"
                alt=""
              />
              <div className={styles.post_txt}>
                <div className={styles.post_date}>
                  <span>July 13, 2023</span>
                  <p>. Admin</p>
                </div>
                <p className={styles.post_parag}>
                  The Impact of Covid-19 on travel & tourism industry
                </p>
              </div>
            </div>
            <div className={styles.post}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/istockphoto-1057500046-612x612.jpg?alt=media&token=0e19229a-a8ed-491b-b746-c1e63a067e95"
                alt=""
              />
              <div className={styles.post_txt}>
                <div className={styles.post_date}>
                  <span>July 13, 2023</span>
                  <p>Admin</p>
                </div>
                <p className={styles.post_parag}>
                  The Impact of Covid-19 on travel & tourism industry
                </p>
              </div>
            </div>
          </div>
          <div className={styles.post_col}>
            <div className={styles.post}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/TAL-Backpacker-BUDGET0323-eeaf531276694f93966baa8fbcd2730d.jpg?alt=media&token=cc556289-0dd7-467b-a19c-0facb92d9d97"
                alt=""
              />
              <div className={styles.post_txt}>
                <div className={styles.post_date}>
                  <span>July 13, 2023</span>
                  <p>Admin</p>
                </div>
                <p className={styles.post_parag}>
                  The Impact of Covid-19 on travel & tourism industry
                </p>
              </div>
            </div>
            <div className={styles.post}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/AdobeStock_274090487-1024x602.jpeg?alt=media&token=6849b0f2-824e-4a5b-9bba-bc42d943c345"
                alt=""
              />
              <div className={styles.post_txt}>
                <div className={styles.post_date}>
                  <span>July 13, 2023</span>
                  <p>Admin</p>
                </div>
                <p className={styles.post_parag}>
                  The Impact of Covid-19 on travel & tourism industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.details}>
        <FaHiking />
        <BsSuitcase />
        <GiMountainClimbing />
        <FaSwimmer />
        <GiCycling />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
