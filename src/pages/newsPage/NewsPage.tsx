import Post from '@/components/post/Post';
import { Link } from 'react-router-dom';

export default function NewsPage() {
  const posts = true;

  return (
    <>
      <div className="container posts">
        {posts ? (
          <ul className="itemsList">
            <Link to={`/friends/${123}`}>
              <li className="mainButton">
                <Post />
              </li>
            </Link>
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
