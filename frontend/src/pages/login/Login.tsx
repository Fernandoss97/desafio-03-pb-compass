import { useState } from "react";
import styles from "./login.module.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import {
  loginWithEmailAndPass,
  loginWithGoogle,
  createUserWithEmailAndPass,
  loginWithFacebook,
} from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext/Index";
import { Navigate } from "react-router-dom";
import Slider from "react-slick";

const Login = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isSingIn, setIsSingIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLoginFb = async () => {
    if (!isSingIn) {
      setIsSingIn(true);
      loginWithFacebook().catch(err => {
        setIsSingIn(false);
        console.log(err);
      });
    }
  };

  const handleLoginEmailAndPass = async () => {
    if (!isSingIn) {
      setIsSingIn(true);
      await loginWithEmailAndPass(email, pass);
    }
  };

  const handleLoginGoogle = async (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    if (!isSingIn) {
      setIsSingIn(true);
      loginWithGoogle().catch(err => {
        setIsSingIn(false);
      });
    }
  };

  const handleSingUp = async () => {
    if (!isRegistering) {
      setIsRegistering(true);
      await createUserWithEmailAndPass(email, pass);
    }
  };

  const settingsSlider = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
  };

  return (
    <div className={styles.container}>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <div className={styles.ct_content}>
        <div className={styles.content}>
          <div className={styles.ct_header}>
            {isLogin ? <h1>Sign In</h1> : <h1>Sign Up</h1>}
            <p>Please enter your email and password</p>
          </div>
          <form className={styles.form}>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={styles.input_login}
              type="text"
              placeholder="Email"
            />
            <input
              value={pass}
              onChange={e => setPass(e.target.value)}
              className={styles.input_login}
              type="password"
              placeholder="Password"
            />
          </form>
          {isLogin && (
            <button
              onClick={() => handleLoginEmailAndPass()}
              disabled={email.length === 0 || pass.length === 0 ? true : false}
              className={styles.bt_login}
            >
              Login
            </button>
          )}
          {!isLogin && (
            <button
              disabled={email.length === 0 || pass.length === 0 ? true : false}
              onClick={handleSingUp}
              className={styles.bt_login}
            >
              Sign Up
            </button>
          )}
          {isLogin && (
            <div className={styles.continue}>
              <div className={styles.detail}></div>
              <p>or continue with</p>
              <div className={styles.detail}></div>
            </div>
          )}

          {isLogin && (
            <div className={styles.social}>
              <div className={styles.ct_social}>
                <FaGoogle
                  onClick={e => {
                    handleLoginGoogle(e);
                  }}
                  className={styles.social_icon}
                />
              </div>
              <div className={styles.ct_social}>
                <FaFacebookF onClick={handleLoginFb} className={styles.social_icon} />
              </div>
            </div>
          )}
          {isLogin && (
            <p className={styles.register}>
              Dont have an account?<span onClick={() => setIsLogin(false)}>Sign Up</span>
            </p>
          )}
        </div>
        <div className={styles.ct_slider}>
          <Slider {...settingsSlider} arrows={false}>
            <div className={styles.box_slider}>
              <div className={styles.box_info}>
                <p>Christ the Redeemer</p>
                <h2>Brazil</h2>
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/pexels-silvia-trigo-545701-3607628.jpg?alt=media&token=bee1a4bb-d82f-45f5-8094-56b552d7c2e4"
                alt="Christ the Redeemer"
              />
            </div>
            <div className={styles.box_slider}>
              <div className={styles.box_info}>
                <p>Machu Picchu</p>
                <h2>Peru</h2>
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/pexels-wim-van-den-brande-14125175-6448057.jpg?alt=media&token=b37319ce-dfd9-4654-b412-11c9c59cb450"
                alt="Machu Picchu"
              />
            </div>
            <div className={styles.box_slider}>
              <div className={styles.box_info}>
                <p>Chichén Itzá</p>
                <h2>Mexico</h2>
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/pexels-alexazabache-3290068.jpg?alt=media&token=128bf339-9586-409f-a639-be431625fcaf"
                alt="Chichén Itzá"
              />
            </div>
            <div className={styles.box_slider}>
              <div className={styles.box_info}>
                <p>Coliseum</p>
                <h2>Italy</h2>
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/pexels-mark-neal-201020-2225439.jpg?alt=media&token=8cbb0ef1-852c-484e-b813-e2e9347bcd48"
                alt="Coliseum"
              />
            </div>
            <div className={styles.box_slider}>
              <div className={styles.box_info}>
                <p>Ruins of Petra</p>
                <h2>Jordan</h2>
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/pexels-axp-photography-500641970-18717558.jpg?alt=media&token=8863c001-288f-44a3-b412-503fdeb699f7"
                alt="Ruins of Petra"
              />
            </div>
            <div className={styles.box_slider}>
              <div className={styles.box_info}>
                <p>Taj Mahal</p>
                <h2>India</h2>
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/pexels-rachel-claire-7263897.jpg?alt=media&token=e5811549-2733-4990-89ff-ae8930a4b004"
                alt="Taj Mahal"
              />
            </div>
            <div className={styles.box_slider}>
              <div className={styles.box_info}>
                <p>Great Wall</p>
                <h2>China</h2>
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/pexels-artem-korsakov-132129914-10952316.jpg?alt=media&token=986fb824-20bf-4d3e-a8d0-ba040e3d702a"
                alt="Great Wall"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Login;
