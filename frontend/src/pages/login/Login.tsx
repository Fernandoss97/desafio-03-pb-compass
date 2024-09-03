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
import { Navigate, useNavigate } from "react-router-dom";
import Slider from "react-slick";

const Login = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isSingIn, setIsSingIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
            {isLogin ? <h1>Sing In</h1> : <h1>Sign Up</h1>}
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
          {/* <div className={styles.ct_blur}></div> */}
          <Slider {...settingsSlider} arrows={false}>
            <div className={styles.box_slider}>
              <div className={styles.box_info}>
                <p>Christ the Redeemer</p>
                <h2>Brazil</h2>
              </div>
              <img
                src="https://images.pexels.com/photos/3607628/pexels-photo-3607628.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Christ the Redeemer"
              />
            </div>
            <div className={styles.box_slider}>
              <div className={styles.box_info}>
                <p>Machu Picchu</p>
                <h2>Peru</h2>
              </div>
              <img
                src="https://images.pexels.com/photos/6448057/pexels-photo-6448057.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className={styles.box_slider}>
              <div className={styles.box_info}>
                <p>Chichén Itzá</p>
                <h2>Mexico</h2>
              </div>
              <img
                src="https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Chichén Itzá"
              />
            </div>
            <div className={styles.box_slider}>
              <div className={styles.box_info}>
                <p>Coliseum</p>
                <h2>Italy</h2>
              </div>
              <img
                src="https://images.pexels.com/photos/2225439/pexels-photo-2225439.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Coliseum"
              />
            </div>
            <div className={styles.box_slider}>
              <div className={styles.box_info}>
                <p>Ruins of Petra</p>
                <h2>Jordan</h2>
              </div>
              <img
                src="https://images.pexels.com/photos/18717558/pexels-photo-18717558/free-photo-of-rock-carved-building-of-the-treasury-in-petra-jordan.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className={styles.box_slider}>
              <div className={styles.box_info}>
                <p>Taj Mahal</p>
                <h2>India</h2>
              </div>
              <img
                src="https://images.pexels.com/photos/7263897/pexels-photo-7263897.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Taj Mahal"
              />
            </div>
            <div className={styles.box_slider}>
              <div className={styles.box_info}>
                <p>Great Wall</p>
                <h2>China</h2>
              </div>
              <img
                src="https://images.pexels.com/photos/10952316/pexels-photo-10952316.jpeg?auto=compress&cs=tinysrgb&w=600"
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
