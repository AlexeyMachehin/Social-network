import Post from '../../components/post/Post';
import classes from './newsPage.module.css';

export default function NewsPage() {
  const posts = true;

  return (
    <>
      <div className="container posts">
        {posts ? (
          <ul className="itemsList">
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
            <li className="mainButton">
              <Post />
            </li>
          </ul>
        ) : (
          <div>No posts</div>
        )}
      </div>
    </>
  );
}
