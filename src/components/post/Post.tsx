import { Avatar } from '@mui/material';
import { IPost } from '@/types/post';
import classes from './post.module.css';

export default function Post({ message, likes, id }: IPost) {
  const addLike = () => {};

  return (
    <div className={classes.postWrapper}>
      <Avatar className={classes.avatar} alt="Avatar" src="#" />
      <div className={classes.postContent}>
        <div className={classes.userData}>
          <div className={classes.userDataItem}>Name</div>
          <div className={classes.userDataItem}>Surname</div>
        </div>
        <div>{message}</div>
        <div className={classes.likesButtonWrapper}>
          <button
            onClick={addLike}
            className={`container mainButton ${classes.likes}`}>
            Likes: {likes}
          </button>
        </div>
      </div>
    </div>
  );
}
