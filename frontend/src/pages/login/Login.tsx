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

  return (
    <div className={styles.container}>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
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
    </div>
  );
};

export default Login;
