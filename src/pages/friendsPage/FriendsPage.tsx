import Friend from '@/components/friend/Friend';
export default function FriendsPage() {
  const posts = true;

  return (
    <>
      <div className="container posts">
        {posts ? (
          <ul className="itemsList">
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
            <li className="mainButton">
              <Friend />
            </li>
          </ul>
        ) : (
          <div>No posts</div>
        )}
      </div>
    </>
  );
}
