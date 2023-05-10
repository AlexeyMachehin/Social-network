import { selectorUser } from '@/store/selectors';
import { useAppSelector } from '@/hooks/reduxHooks';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import NewPostModal from '@/components/newPostModal/NewPostModal';
import Post from '@/components/post/Post';
import { posts } from '@/mockData/posts';
import { IPost } from '@/types/post';
import { useParams } from 'react-router-dom';
import classes from './userPage.module.css';

export default function UserPage() {
  const { idParam } = useParams();
  const user = useAppSelector(selectorUser);

  function checkIsMyFriend(userProfile: any, friendId: any) {
    return userProfile.friends.some((friend: any) => {
      return friend.id === friendId;
    });
  }

  const [isFriend] = useState(idParam ? checkIsMyFriend(user, idParam) : false);

  return (
    <>
      <div style={{ display: 'flex', marginBottom: '20px', width: '100%' }}>
        <div
          className={`container ${classes.userInfo} ${
            idParam && classes.userInfoRoundedBorder
          }`}>
          <Avatar
            alt="Avatar"
            src={user.photoURL}
            className={classes.userInfo__avatar}
          />

          <div className={classes.userInfo__content}>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div className={classes.userInfo__content_name}>{user.name}</div>
              <div>{user.surname}</div>
            </div>

            <div>
              <div className={classes.contentItem}>{user.age}</div>
              <div className={classes.contentItem}>{user.city}</div>
              <div className={classes.contentItem}>{user.university}</div>
            </div>
          </div>
        </div>

        {idParam && (
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

      {!idParam && <NewPostModal />}

      <div
        className={`container posts ${classes.postsStraightBorder} ${
          idParam && classes.postsRoundedBorder
        }`}>
        {posts ? (
          <div className="itemsList">
            {user.posts.map((post: IPost) => (
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
