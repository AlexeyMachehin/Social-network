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
                <Post message={''} likes={0} id={''} />
              </li>
            </Link>
          </ul>
        ) : (
          <div>No posts</div>
        )}
      </div>
    </>
  );
}
