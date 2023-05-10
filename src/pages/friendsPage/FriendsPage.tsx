import Friend from '@/components/friend/Friend';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function FriendsPage() {
  const posts = true;
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, []);

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
