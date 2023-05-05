import Post from '../../components/post/Post';
import classes from './newsPage.module.css';

export default function FriendsPage() {
  const posts = true;

  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>News</h2>
      <div className={`container ${classes.wrapper}`}>
        {posts ? (
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
        ) : (
          <div>No posts</div>
        )}
      </div>
    </>
  );
}
