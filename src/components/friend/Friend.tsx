import { Avatar } from '@mui/material';
import classes from './friend.module.css';

export default function Friend() {
  return (
    <div className={classes.postWrapper}>
      <Avatar className={classes.avatar} alt="Avatar" src="#" />

      <div className={classes.postContent}>
        <div>
          <div className={classes.userData}>
            <div className={classes.userDataItem}>Name</div>
            <div className={classes.userDataItem}>Surname</div>
          </div>
          <div>Age</div>
          <div>City</div>
          <div>university</div>
        </div>

        <button className="container mainButton">Remove from friends</button>
      </div>
    </div>
  );
}
