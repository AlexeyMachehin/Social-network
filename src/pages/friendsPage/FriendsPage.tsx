import classes from './friendsPage.module.css';

export default function FriendsPage() {
  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
        Friends list
      </h2>
      <div className={`container ${classes.wrapper}`}></div>
    </>
  );
}
