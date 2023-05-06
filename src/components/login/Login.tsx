import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../consts/routes';
import { useDispatch } from 'react-redux';
import { Avatar, Button, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useLoginFormik } from './hooks/useLoginFormik';
import classes from './login.module.css';

export default function Login() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSubmit = async (values: any) => {
    // dispatch(
    //   login({
    //     login: values.login,
    //     password: values.password,
    //   })
    // )
    //   .then(() => dispatch(getUser()))
    navigate(RoutePaths.INDEX);
  };
  const formik = useLoginFormik({ onSubmit: handleSubmit });

  return (
    <div className={`container ${classes.wrapper}`}>
      <div>
        <div className={classes.avatarWrapper}>
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>

          <div className={classes.loginTitle}>Login</div>
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
          <button className={`container ${classes.signInButton}`} type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
