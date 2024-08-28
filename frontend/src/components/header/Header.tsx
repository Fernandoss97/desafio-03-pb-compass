import { FaTwitter, FaLinkedinIn, FaGoogle, FaPinterestP } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.ct_top}>
        <div className={styles.ct_contact}>
          <p>(000)999-898-999</p>
          <p className={styles.email}>info@trisog.com</p>
        </div>
        <div className={styles.ct_right}>
          <div className={styles.ct_social}>
            <FaTwitter />
            <FaLinkedinIn />
            <FaGoogle />
            <FaPinterestP />
          </div>
          <div className={styles.ct_currency}>
            <p>EUR</p>
            <MdExpandMore />
          </div>
        </div>
      </div>
      <nav className={styles.nav}>
        <div className={styles.ct_logo}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/Logo%20Color%3DBlack.svg?alt=media&token=d7eef001-98de-43b0-bcf5-ea2156f3f3e2"
            alt="Logo"
          />
          <ul className={styles.ct_menu}>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active_link : styles.default_link)}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>About</li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active_link : styles.default_link)}
                to="/tour-package"
              >
                Tours
              </NavLink>
            </li>
            <li>Destination</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.ct_login}>
          <CiSearch className={styles.search_icon} />
          <FiUser className={styles.user_icon} />
          <a href="#">Login / Signup</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
