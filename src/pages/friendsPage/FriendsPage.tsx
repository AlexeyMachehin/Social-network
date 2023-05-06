import Friend from '../../components/friend/Friend';
import Post from '../../components/post/Post';
import classes from './friendsPage.module.css';

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
