import Post from '@/components/post/Post';

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
