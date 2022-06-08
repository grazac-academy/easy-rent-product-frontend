import React from 'react';
import styles from './DashboardHeader.module.css';
import {IoNotifications } from 'react-icons/io5';
import  profile  from 'assets/Dashboard/JohnDoe.png';


const Header = () => {
 
  return (
    <div className={styles.db_headerContainer}>
      <div className={styles.db_header}>
        <div className={styles.notification}>
          <IoNotifications />
        </div>
        <div className={styles.profile}>
          <img src={profile} alt="profile" />
        </div>
        <h1 className={styles.userName}>John Doe toluwalase</h1>
      </div>
    </div>
  );
};

export default Header;
