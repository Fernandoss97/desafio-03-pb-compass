import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

export const createUserWithEmailAndPass = async (email: string, pass: string) => {
  return createUserWithEmailAndPassword(auth, email, pass);
};

export const loginWithEmailAndPass = async (email: string, pass: string) => {
  return signInWithEmailAndPassword(auth, email, pass);
};

export const loginWithFacebook = async () => {
  const provider = new FacebookAuthProvider();

  const fbAuth = signInWithPopup(auth, provider);

  return fbAuth;
};

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const signOut = () => {
  return auth.signOut();
};
