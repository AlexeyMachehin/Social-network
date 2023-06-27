import classes from './friendshipToggleButton.module.css';

export default function FriendshipToggleButton() {
  const isFriend = true;

  return (
    <div className={classes.wrapper}>
      {isFriend ? 'Remove from friends' : 'Add to friends'}
    </div>
  );
}
