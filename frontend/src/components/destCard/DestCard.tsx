import styles from "./destCard.module.css";

const DestCard = () => {
  return (
    <div className={styles.ct_card}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/dest-card.jpg?alt=media&token=41ced242-aba4-453a-bcbd-273100d60715"
        alt=""
      />
      <div className={styles.ct_info}>
        <p>174,688 Travelers</p>
        <h2>United Kingdom</h2>
      </div>
    </div>
  );
};

export default DestCard;
