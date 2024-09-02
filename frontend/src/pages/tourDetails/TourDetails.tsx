import Slider from "react-slick";
import AddReview from "../../components/addReview/AddReview";
import AverageReviews from "../../components/averageReviews/AverageReviews";
import BookSettings from "../../components/bookSettings/BookSettings";
import Header from "../../components/header/Header";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import TourInfo from "../../components/tourInfo/TourInfo";
import styles from "./tourDetails.module.css";
import TourCard from "../../components/tourCard/TourCard";
import Footer from "../../components/footer/Footer";
import Map from "../../components/mapGoogle/Map";
import { baseURL } from "../../config/apiConfig";
import axios from "axios";
import { useEffect, useState } from "react";
import { ReviewInterface, TourInterface } from "../../components/types/Types";
import { useParams } from "react-router-dom";
import ImgTour from "../../components/imgTour/ImgTour";
import { useAuth } from "../../contexts/authContext/Index";

const TourDetails = () => {
  const [tour, setTour] = useState<TourInterface>();
  const [tours, setTours] = useState<TourInterface[]>();
  const [reviews, setReviews] = useState<ReviewInterface[]>();
  const [newReview, setNewReview] = useState(false);
  const { tourID } = useParams();
  const { currentUser } = useAuth();

  console.log(currentUser);

  const settingsTour = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
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

  const fetchTour = async () => {
    try {
      const res = await axios.get(`${baseURL}/tour/${tourID}`);
      setTour(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchReviewsByTour = async () => {
    try {
      const res = await axios.get(`${baseURL}/reviews/${tourID}`);
      setReviews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyUserRegister = async () => {
    try {
      const res = await axios.get(`${baseURL}/user/${currentUser?.uid}`);
      if (res.data === null) {
        try {
          const res = await axios.post(`${baseURL}/user/create`, {
            name: currentUser?.displayName,
            email: currentUser?.email,
            firebaseID: currentUser?.uid,
          });
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyUserRegister();
  }, []);

  useEffect(() => {
    fetchTours();
    fetchTour();
    fetchReviewsByTour();
  }, [tourID, newReview]);

  if (!tour) {
    return <div>Loadin component</div>;
  }
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.tour_info}>
          <div className={styles.tour_data}>
            <ImgTour tour={tour!} />
            <TourInfo tour={tour!} />
          </div>
          <BookSettings tour={tour!} />
        </div>
        <div className={styles.overview}>
          <h2>Overview</h2>
          <p>{tour.overview}</p>
        </div>
        <div className={styles.map}>
          <Map tour={tour} />
        </div>
        <div className={styles.ct_average}>
          <AverageReviews tour={tour} />
          <div className={styles.rv_card}>
            <h2>Showing {tour.reviews.length} Review</h2>
            {reviews?.map(review => (
              <ReviewCard review={review} key={review._id} />
            ))}
          </div>
          <AddReview tour={tour} newReview={newReview} setNewReview={setNewReview} />
        </div>
        <div className={styles.ct_slider}>
          <h1>You may also like...</h1>
          <Slider {...settingsTour}>
            {tours?.map(tour => (
              <div key={tour._id}>
                <TourCard tour={tour} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TourDetails;
