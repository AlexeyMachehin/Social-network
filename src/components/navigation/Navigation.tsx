import { RoutePaths } from '../../consts/routes';
import { NavLink } from 'react-router-dom';
import classes from './navigation.module.css';

export default function Navigation() {
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
      <NavLink
        to={RoutePaths.AUTHORIZATION}
        className={({ isActive, isPending }) =>
          isPending
            ? `${classes.item}`
            : isActive
            ? `${classes.item} ${classes.active}`
            : `${classes.item}`
        }>
        Exit
      </NavLink>
    </nav>
  );
}
