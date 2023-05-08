import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import classes from './googleAuthButton.module.css';

export default function GoogleAuthButton() {
  const googleAuthLogin = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider);
  };
  return (
    <button className={classes.googleAuthButton} onClick={googleAuthLogin}>
      <img
        className={classes.googleAuthButtonIcon}
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="google icon"
      />

      <span>Sign in with Google</span>
    </button>
  );
}
