import { useNavigate } from 'react-router-dom';
import { useSignupFormik } from './hooks/useSignupFormik';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { Avatar, TextField } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { RoutePaths } from '@/consts/routes';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import classes from './signup.module.css';
import GoogleAuthButton from '../googleAuthButton/GoogleAuthButton';

export default function Signup(props: { setIsLoginComponent: any }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      // .then(({ user }) => {

      //   dispatch(
      //     setUser({
      //       email: user.email,
      //       firstName: values.firstName,
      //       surname: values.surname,
      //       age: values.age,
      //       city: values.city,
      //       university: values.university,
      //       id: user.uid,
      //       token: user.accessToken,
      //     }),
      //   );
      // })
      .then(() => navigate(RoutePaths.INDEX));
  };

  const formik = useSignupFormik({ onSubmit: handleSubmit });

  return (
    <div className={`container ${classes.wrapper}`}>
      <div className={classes.avatarWrapper}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <CheckBoxIcon />
        </Avatar>
        <div className={classes.signupTitle}>Signup</div>
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
          value={formik.values.firstName}
          onChange={formik.handleChange}
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="firstName"
          autoComplete="name"
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          value={formik.values.surname}
          onChange={formik.handleChange}
          margin="normal"
          required
          fullWidth
          id="Surname"
          label="Surname"
          name="surname"
          autoComplete="surname"
          error={formik.touched.surname && Boolean(formik.errors.surname)}
          helperText={formik.touched.surname && formik.errors.surname}
        />
        <TextField
          value={formik.values.age}
          onChange={formik.handleChange}
          margin="normal"
          required
          fullWidth
          id="age"
          label="Age"
          name="age"
          autoComplete="age"
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
        />
        <TextField
          value={formik.values.city}
          onChange={formik.handleChange}
          margin="normal"
          required
          fullWidth
          id="city"
          label="City"
          name="city"
          autoComplete="city"
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
        <TextField
          value={formik.values.university}
          onChange={formik.handleChange}
          margin="normal"
          required
          fullWidth
          id="university"
          label="University"
          name="university"
          autoComplete="university"
          error={formik.touched.university && Boolean(formik.errors.university)}
          helperText={formik.touched.university && formik.errors.university}
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
        <TextField
          value={formik.values.passwordAgain}
          onChange={formik.handleChange}
          margin="normal"
          required
          fullWidth
          name="passwordAgain"
          label="Password-Again"
          type="password"
          id="password-again"
          error={
            formik.touched.passwordAgain && Boolean(formik.errors.passwordAgain)
          }
          helperText={
            formik.touched.passwordAgain && formik.errors.passwordAgain
          }
        />

        <button className={`container ${classes.signUpButton}`} type="submit">
          Sign Up
        </button>
      </form>
      <div className={classes.loginButtonWrapper}>
        <button
          onClick={() => props.setIsLoginComponent(true)}
          className={classes.loginButtonButton}>
          or Sign In
        </button>
      </div>
    </div>
  );
}
