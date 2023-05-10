import { Avatar } from '@mui/material';
import NewPostModal from '@/components/newPostModal/NewPostModal';
import Post from '@/components/post/Post';
import classes from './userPage.module.css';

export default function UserPage() {
  const isMyPage = true;
  const isFriend = true;
  const posts = true;

  return (
    <>
      <div style={{ display: 'flex', marginBottom: '20px', width: '100%' }}>
        <div
          className={`container ${classes.userInfo} ${
            !isMyPage && classes.userInfoRoundedBorder
          }`}>
          <Avatar alt="Avatar" src="#" className={classes.userInfo__avatar} />

          <div className={classes.userInfo__content}>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div className={classes.userInfo__content_name}>Алексей</div>
              <div>Мачехин</div>
            </div>

            <div>
              <div className={classes.contentItem}>30 лет</div>
              <div className={classes.contentItem}>Екатеринбург</div>
              <div className={classes.contentItem}>УрГЭУ</div>
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

      {isMyPage && <NewPostModal />}

      <div
        className={`container posts ${classes.postsStraightBorder} ${
          !isMyPage && classes.postsRoundedBorder
        }`}>
        {posts ? (
          <div className="itemsList">
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
        ) : (
          <div>No posts</div>
        )}
      </div>
    </>
  );
}
