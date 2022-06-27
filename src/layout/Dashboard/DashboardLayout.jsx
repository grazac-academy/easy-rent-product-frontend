import React from "react";
import styles from "./DashboardLayout.module.css";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "pages/Dashboard/DashboardSidebar/DashboardSidebar";
import DashboardSidebarMobile from "pages/Dashboard/DashboardSidebarMobile/DashboardSidebarMobile";
import DashboardHeader from "pages/Dashboard/DashboardHeader/DashboardHeader";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const DashboardLayout = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.db_container}>
      {toggle ? (
        <button onClick={handleToggle} className={styles.hamburger}>
          <FaBars />
        </button>
      ) : (
        <button onClick={handleToggle} className={styles.hamburger}>
          <FaTimes />
        </button>
      )}
      {!toggle ? <DashboardSidebarMobile /> : <DashboardSidebar />}

      <div className={styles.db_content}>
        <DashboardHeader />
        <main className={styles.mainOutlet}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
