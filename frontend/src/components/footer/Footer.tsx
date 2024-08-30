import styles from "./footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.ct_contact}>
          <div className={styles.ct_logo}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/Logo%20Color%3DWhite.svg?alt=media&token=f890e2cc-f317-492a-8dcc-6e6eb565f4da"
              alt=""
            />
          </div>
          <div className={styles.ct_phone}>
            <p className={styles.help}>Need any help?</p>
            <p className={styles.callus}>
              Call Us: <span>(888)1234 5678</span>
            </p>
          </div>
          <div className={styles.ct_info}>
            <p>Love Street, Muscat, Oman</p>
            <p>example@trisog.com</p>
          </div>
          <div className={styles.ct_social}>
            <a href="https://pt-br.facebook.com/" target="_blank">
              <FaFacebookSquare className={styles.socialIcons} />
            </a>
            <a href="https://x.com/?lang=pt-br" target="_blank">
              <FaTwitter className={styles.socialIcons} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedinIn className={styles.socialIcons} />
            </a>
          </div>
        </div>
        <div className={styles.ct_menu}>
          <div className={styles.ct_company}>
            <h3>Company</h3>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Travel Guides</p>
            <p>Data Policy</p>
          </div>
          <div className={styles.ct_topDest}>
            <h3>Top Destination</h3>
            <p>Las Vegas</p>
            <p>New York City</p>
            <p>San Francisco</p>
            <p>Hawaii</p>
          </div>
          <div className={styles.ct_topDest2}>
            <p>Tokyo</p>
            <p>Sydney</p>
            <p>Melbourne</p>
            <p>Dubai</p>
          </div>
        </div>
        <div className={styles.ct_newsletter}>
          <div className={styles.ct_email}>
            <p>Sign up Newsletter</p>
            <div className={styles.ct_input}>
              <IoPaperPlaneOutline />
              <input className={styles.input} type="text" id="email" placeholder="Enter email..." />
            </div>
            <button>Submit</button>
          </div>
          <div className={styles.ct_copyright}>
            <FaRegCopyright />
            <p>2023 Trisog All Right Reserved</p>
          </div>
        </div>
      </div>
      <div className={styles.ct_border}></div>
    </footer>
  );
};

export default Footer;
