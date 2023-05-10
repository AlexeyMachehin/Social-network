import { useAppSelector } from '@/hooks/reduxHooks';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { selectorUser } from '@/store/selectors';
import { Avatar } from '@mui/material';
import NewPostModal from '@/components/newPostModal/NewPostModal';
import Post from '@/components/post/Post';
import { IPost } from '@/types/post';
import classes from './userPage.module.css';

export default function UserPage() {
  const { idParam } = useParams();
  const user = useAppSelector(selectorUser);

  function checkIsMyFriend(userProfile: any, friendId: any) {
    return userProfile.friends.find((friend: any) => {
      return friend.id === friendId;
    });
  }

  const [userData] = useState(idParam ? checkIsMyFriend(user, idParam) : user);
  console.log(checkIsMyFriend(user, idParam));
  return (
    <>
      <div style={{ display: 'flex', marginBottom: '20px', width: '100%' }}>
        <div
          className={`container ${classes.userInfo} ${
            idParam && classes.userInfoRoundedBorder
          }`}>
          <Avatar
            alt="Avatar"
            src={userData.photoURL}
            className={classes.userInfo__avatar}
          />

          <div className={classes.userInfo__content}>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div className={classes.userInfo__content_name}>
                {userData.name}
              </div>
              <div>{userData.surname}</div>
            </div>

            <div>
              <div className={classes.contentItem}>{userData.age}</div>
              <div className={classes.contentItem}>{userData.city}</div>
              <div className={classes.contentItem}>{userData.university}</div>
            </div>
          </div>
        </div>

        {idParam && (
          <button
            className={`${classes.friendshipToggle} mainButton container`}>
            {userData.id === user.id ? (
              <span style={{ textAlign: 'center' }}>Add to friends</span>
            ) : (
              <span style={{ textAlign: 'center' }}>Remove from friends</span>
            )}
          </button>
        )}
      </div>

      {!idParam && <NewPostModal />}

      <div
        className={`container posts ${classes.postsStraightBorder} ${
          idParam && classes.postsRoundedBorder
        }`}>
        {userData.posts ? (
          <div className="itemsList">
            {userData.posts.map((post: IPost) => (
              <Post
                key={`${post.id}${post.message}`}
                message={post.message}
                likes={post.likes}
                id={post.id}
              />
            ))}
          </div>
        ) : (
          <div>No posts</div>
        )}
      </div>
    </>
  );
}
