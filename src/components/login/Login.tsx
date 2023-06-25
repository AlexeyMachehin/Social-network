import { useNavigate } from 'react-router-dom';
import { useLoginFormik } from './hooks/useLoginFormik';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { Avatar, TextField } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { RoutePaths } from '@/consts/routes';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleAuthButton from '../googleAuthButton/GoogleAuthButton';
import PhoneAuth from '../phoneAuth/PhoneAuth';
import classes from './login.module.css';

export default function Login(props: { setIsLoginComponent: any }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .catch(error => console.log(error))
      // .then(({ user }) => {

      //   dispatch(
      //     setUser({
      //       email: user.email,
      //       id: user.uid,
      //       token: user.accessToken,
      //     }),
      //   );
      // })
      .then(() => navigate(RoutePaths.INDEX));
  };
  const formik = useLoginFormik({ onSubmit: handleSubmit });

  return (
    <div className={`container ${classes.wrapper}`}>
      <div>
        <div className={classes.avatarWrapper}>
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>

          <div className={classes.loginTitle}>Sign In</div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            value={formik.values.email}
            onChange={formik.handleChange}
            margin="normal"
            required
            fullWidth
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            value={formik.values.password}
            onChange={formik.handleChange}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <div className={classes.authButtonWrapper}>
            <GoogleAuthButton />
            <PhoneAuth />
          </div>

          <button className={`container ${classes.signInButton}`} type="submit">
            Sign In
          </button>
        </form>
        <div className={classes.signupButtonWrapper}>
          <button
            onClick={() => props.setIsLoginComponent(false)}
            className={classes.signupButton}>
            or Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
