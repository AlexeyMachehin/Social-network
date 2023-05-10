import { useAppDispatch } from '@/hooks/reduxHooks';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { removeUser } from '@/store/slices/userSlice';
import { RoutePaths } from '@/consts/routes';
import classes from './navigation.module.css';

export default function Navigation() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const logout = () => {
    const auth = getAuth();
    auth.signOut();
    dispatch(removeUser());
    navigate(RoutePaths.AUTHORIZATION);
  };

  return (
    <nav className={classes.wrapper}>
      <NavLink
        to={RoutePaths.INDEX}
        className={({ isActive, isPending }) =>
          isPending
            ? `${classes.item}`
            : isActive
            ? `${classes.item} ${classes.active}`
            : `${classes.item}`
        }>
        Profile
      </NavLink>
      <NavLink
        to={RoutePaths.NEWS}
        className={({ isActive, isPending }) =>
          isPending
            ? `${classes.item}`
            : isActive
            ? `${classes.item} ${classes.active}`
            : `${classes.item}`
        }>
        News
      </NavLink>
      <NavLink
        to={RoutePaths.FRIENDS}
        className={({ isActive, isPending }) =>
          isPending
            ? `${classes.item}`
            : isActive
            ? `${classes.item} ${classes.active}`
            : `${classes.item}`
        }>
        Friends
      </NavLink>

      <button className={classes.exitButton} onClick={logout}>
        Exit
      </button>
    </nav>
  );
}
