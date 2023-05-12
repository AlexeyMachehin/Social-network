/* eslint-disable @typescript-eslint/no-use-before-define */
import { useAppSelector } from '@/hooks/reduxHooks';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { selectorUser } from '@/store/selectors';
import { Avatar } from '@mui/material';
import NewPostModal from '@/components/newPostModal/NewPostModal';
import Post from '@/components/post/Post';
import { IPost } from '@/types/post';
import { userService } from '@/services/userService';
import { IUser } from '@/types/user';
import classes from './userPage.module.css';

export default function UserPage() {
  const { idParam } = useParams();
  const user = useAppSelector(selectorUser);
  const [userData, setUserData] = useState(user);
  const [isFriend, setIsFriend] = useState(false);

  function checkIsMyFriend(userProfile: IUser, friendId: string) {
    const result = userProfile.friends.find((friend: any) => {
      return friend.id === friendId;
    });

    return !!result;
  }

  useEffect(() => {
    if (idParam) {
      userService.getUser(idParam).then(userProfile => {
        setUserData(userProfile);
        setIsFriend(checkIsMyFriend(user, idParam));
      });
    }
  }, []);

  return (
    <>
      <div style={{ display: 'flex', marginBottom: '20px', width: '100%' }}>
        <div
          className={`container ${classes.userInfo} ${
            idParam && classes.userInfoRoundedBorder
          }`}>
          <Avatar
            alt="Avatar"
            src={userData?.photoURL ?? ''}
            className={classes.userInfo__avatar}
          />

          <div className={classes.userInfo__content}>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div className={classes.userInfo__content_name}>
                {userData?.name ?? ''}
              </div>
              <div>{userData?.surname ?? ''}</div>
            </div>

            <div>
              <div className={classes.contentItem}>{userData?.email ?? ''}</div>
              <div className={classes.contentItem}>{userData?.age ?? ''}</div>
              <div className={classes.contentItem}>{userData?.city ?? ''}</div>
              <div className={classes.contentItem}>
                {userData?.university ?? ''}
              </div>
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
        {userData?.posts ?? null ? (
          <div className="itemsList">
            {userData?.posts.map((post: IPost) => (
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
