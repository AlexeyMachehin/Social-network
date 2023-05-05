import { Avatar } from '@mui/material';
import classes from './userPage.module.css';
import Post from '../../components/post/Post';

export default function UserPage() {
  const isMyPage = false;
  const isFriend = true;

  return (
    <>
      <div style={{ display: 'flex', marginBottom: '20px', width: '100%' }}>
        <div
          className={`container ${classes.userInfo} ${
            !isMyPage && classes.userInfoRoundedBorder
          }`}>
          <Avatar alt="Avatar" src="" className={classes.userInfo__avatar} />

          <div className={classes.userInfo__content}>
            <div style={{ display: 'flex' }}>
              <div className={classes.userInfo__content_name}>Алексей</div>
              <div>Мачехин</div>
            </div>

            <div>
              <div>30 лет</div>
              <div>Екатеринбург</div>
              <div>УрГЭУ</div>
            </div>
          </div>
        </div>

        {!isMyPage && (
          <button
            className={`${classes.friendshipToggle} mainButton container`}>
            {isFriend ? (
              <span style={{ textAlign: 'center' }}>Remove from friends</span>
            ) : (
              <span style={{ textAlign: 'center' }}>Add to friends</span>
            )}
          </button>
        )}
      </div>

      {isMyPage && (
        <button className={`container mainButton ${classes.newPostButton}`}>
          New post
        </button>
      )}

      <div
        className={`container ${classes.posts} ${
          !isMyPage && classes.postsRoundedBorder
        }`}>
        <div className={classes.postsList}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
}
