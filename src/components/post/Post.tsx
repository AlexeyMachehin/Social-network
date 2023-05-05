import { Avatar } from '@mui/material';
import classes from './post.module.css';

export default function Post() {
  return (
    <>
      <div className={classes.postWrapper}>
        <Avatar
          className={classes.avatar}
          alt="Avatar"
          src="#"
        />
        <div className={classes.postContent}>
          <div className={classes.userData}>
            <div className={classes.userDataItem}>Name</div>
            <div className={classes.userDataItem}>Surname</div>
            <div className={classes.userDataItem}>Time</div>
          </div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat maxime deserunt hic. Cum itaque labore iure, ut esse, nisi harum aliquam ducimus officiis ex, perspiciatis totam quae aut maxime?</div>
        </div>
      </div>
    </>
  );
}
