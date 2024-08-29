import Slider from "react-slick";
import AddReview from "../../components/addReview/AddReview";
import AverageReviews from "../../components/averageReviews/AverageReviews";
import BookSettings from "../../components/bookSettings/BookSettings";
import Header from "../../components/header/Header";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import TourInfo from "../../components/tourInfo/TourInfo";
import styles from "./tourDetails.module.css";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import TourCard from "../../components/tourCard/TourCard";
import Footer from "../../components/footer/Footer";
import Map from "../../components/mapGoogle/Map";

const TourDetails = () => {
  const settingsTour = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.tour_info}>
          <div className={styles.tour_data}>
            <div className={styles.ct_img}>
              <div className={styles.img_control}>
                <div className={styles.ct_icon_control}>
                  <span>Video</span>
                  <AiOutlineVideoCamera className={styles.icon} />
                </div>
                <div className={styles.ct_icon_control}>
                  <span>Gallery</span>
                  <GrGallery className={styles.icon} />
                </div>
              </div>
              <img
                src="https://tripintercambios.com.br/wp-content/uploads/2023/07/maltatopo2.jpg"
                alt=""
              />
            </div>
            <TourInfo />
          </div>
          <BookSettings />
        </div>
        <div className={styles.overview}>
          <h2>Overview</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={styles.map}>
          <Map />
        </div>
        <div className={styles.ct_average}>
          <AverageReviews overallAverage={4.8} />
          <div className={styles.rv_card}>
            <h2>Showing 1 Review</h2>
            <ReviewCard />
          </div>
          <AddReview />
        </div>
        <div className={styles.ct_slider}>
          <h1>You may also like...</h1>
          <Slider {...settingsTour}>
            <div>
              <TourCard />
            </div>
            <div>
              <TourCard />
            </div>
            <div>
              <TourCard />
            </div>
            <div>
              <TourCard />
            </div>
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TourDetails;
