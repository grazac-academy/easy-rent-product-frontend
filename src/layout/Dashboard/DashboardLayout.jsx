import React from 'react';
import styles from './DashboardLayout.module.css';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from 'pages/Dashboard/DashboardSidebar/DashboardSidebar';
import DashboardHeader from 'pages/Dashboard/DashboardHeader/DashboardHeader'


const DashboardLayout = () => {





  return (
    <div className={styles.db_container}>
      <DashboardSidebar />
      <div className={styles.db_content}>
        <DashboardHeader/>
        <main className={styles.mainOutlet}>
           <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;