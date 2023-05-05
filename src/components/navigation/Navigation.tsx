import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../consts/routes';
import classes from './navigation.module.css';

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <nav className={classes.wrapper}>
      <button
        onClick={() => navigate(RoutePaths.INDEX)}
        className={`mainButton ${classes.item}`}>
        Profile
      </button>
      <button
        onClick={() => navigate(RoutePaths.NEWS)}
        className={`mainButton ${classes.item}`}>
        News
      </button>
      <button
        onClick={() => navigate(RoutePaths.FRIENDS)}
        className={`mainButton ${classes.item}`}>
        Friends
      </button>
      <button
        onClick={() => navigate(RoutePaths.AUTHORIZATION)}
        className={`mainButton ${classes.item}`}>
        Exit
      </button>
    </nav>
  );
}
