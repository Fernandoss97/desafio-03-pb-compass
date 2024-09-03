import { useEffect, useState } from "react";
import styles from "./addReview.module.css";
import Rating from "@mui/material/Rating";
import { TourInterface, UserInterface } from "../types/Types";
import axios from "axios";
import { baseURL } from "../../config/apiConfig";
import { currentUserType, useAuth } from "../../contexts/authContext/Index";
import Checkbox from "@mui/material/Checkbox";

type AddReviewProps = {
  tour: TourInterface;
  newReview: boolean;
  setNewReview: (value: boolean) => void;
};

const AddReview = ({ tour, newReview, setNewReview }: AddReviewProps) => {
  const [services, setServices] = useState<number>(1);
  const [locations, setLocations] = useState<number>(1);
  const [amenities, setAmenities] = useState<number>(1);
  const [prices, setPrices] = useState<number>(1);
  const [room, setRoom] = useState<number>(1);
  const [food, setFood] = useState<number>(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [user, setUser] = useState<UserInterface>();
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { currentUser } = useAuth();

  const score = {
    services,
    prices,
    locations,
    food,
    amenities,
    roomConfortAndQuality: room,
  };

  const handleChangeAnonymous = (event: any) => {
    setIsAnonymous(event.target.checked);
  };

  const cleanFields = () => {
    setAmenities(1);
    setFood(1);
    setLocations(1);
    setPrices(1);
    setRoom(1);
    setServices(1);
    setComment("");
    setEmail("");
    setName("");
  };

  const postReview = async () => {
    try {
      const res = await axios.post(`${baseURL}/review/create`, {
        user: user?._id,
        name: isAnonymous ? "Anonymous" : name,
        email: email,
        tour: tour._id,
        score: score,
        comment: comment,
      });
      cleanFields();
      setNewReview(!newReview);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${baseURL}/user/${currentUser?.uid}`);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Add a Review</h2>
      <div className={styles.ct_note}>
        <div className={styles.ct_items}>
          <div className={styles.item}>
            <p>Services</p>
            <Rating
              name="simple-controlled"
              value={services}
              onChange={(event, newValue) => {
                setServices(newValue ?? 1);
              }}
            />
          </div>
          <div className={styles.item}>
            <p>Locations</p>
            <Rating
              name="simple-controlled"
              value={locations}
              onChange={(event, newValue) => {
                setLocations(newValue ?? 1);
              }}
            />
          </div>
          <div className={styles.item}>
            <p>Amenities</p>
            <Rating
              name="simple-controlled"
              value={amenities}
              onChange={(event, newValue) => {
                setAmenities(newValue ?? 1);
              }}
            />
          </div>
          <div className={styles.item}>
            <p>Prices</p>
            <Rating
              name="simple-controlled"
              value={prices}
              onChange={(event, newValue) => {
                setPrices(newValue ?? 1);
              }}
            />
          </div>
        </div>
        <div className={styles.ct_items}>
          <div className={styles.item}>
            <p>Room Confort and Quality</p>
            <Rating
              name="simple-controlled"
              value={room}
              onChange={(event, newValue) => {
                setRoom(newValue ?? 1);
              }}
            />
          </div>
          <div className={styles.item}>
            <p>Food</p>
            <Rating
              name="simple-controlled"
              value={food}
              onChange={(event, newValue) => {
                setFood(newValue ?? 1);
              }}
            />
          </div>
        </div>
      </div>

      <form className={styles.form}>
        <div className={styles.ct_checkbox}>
          <Checkbox
            checked={isAnonymous}
            onChange={handleChangeAnonymous}
            inputProps={{ "aria-label": "controlled" }}
          />
          <span>is anonymous?</span>
        </div>
        <div className={styles.ct_name}>
          <input
            className={styles.input_name}
            disabled={isAnonymous ? true : false}
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            className={styles.input_email}
            type="email"
            placeholder="Email Adress"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Write Your Comment"
        ></textarea>
      </form>
      <button
        onClick={postReview}
        disabled={
          (email.length === 0 || name.length === 0 || comment.length === 0) && isAnonymous === false
            ? true
            : false
        }
      >
        Submit Review
      </button>
    </div>
  );
};

export default AddReview;
