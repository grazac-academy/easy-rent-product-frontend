import React from 'react';
import styles from './DashboardHeader.module.css';
import { IoNotifications } from 'react-icons/io5';
import profile from 'assets/Dashboard/JohnDoe.png';
import { useContextState } from 'context/context';
import { FaTimes, FaBars } from 'react-icons/fa';


const Header = ({toggle, setToggle}) => {
  const { user } = useContextState();
   const handleToggle = () => {
     setToggle(!toggle);
   };

  return (
    <div className={styles.db_headerContainer}>
      {toggle ? (
        <button onClick={handleToggle} className={styles.hamburger}>
          <FaBars />
        </button>
      ) : (
        <button onClick={handleToggle} className={styles.hamburger}>
          <FaTimes />
        </button>
      )}
      <div className={styles.db_header}>
        <div className={styles.notification}>
          <IoNotifications />
        </div>
        <div className={styles.profile}>
          <img src={profile} alt="profile" />
        </div>
        {user ? (
          <h1 className={styles.userName}>
            {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)}{' '}
            {user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}
          </h1>
        ) : (
          <h1 className={styles.userName}>User Name</h1>
        )}
      </div>
    </div>
  );
};

export default Header;
