import { useState } from "react";
import styles from "./addReview.module.css";
import Rating from "@mui/material/Rating";

const AddReview = () => {
  const [services, setServices] = useState<number>(1);
  const [locations, setLocations] = useState<number>(1);
  const [amenities, setAmenities] = useState<number>(1);
  const [prices, setPrices] = useState<number>(1);
  const [room, setRoom] = useState<number>(1);
  const [food, setFood] = useState<number>(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

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
        <div className={styles.ct_name}>
          <input
            className={styles.input_name}
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
        disabled={email.length === 0 || name.length === 0 || comment.length === 0 ? true : false}
        type="submit"
      >
        Submit Review
      </button>
    </div>
  );
};

export default AddReview;
