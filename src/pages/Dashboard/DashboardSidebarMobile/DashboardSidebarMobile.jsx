import React from 'react';
import styles from './DashboardSidebarMobile.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HiViewGrid } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { MdHouse } from 'react-icons/md';
import { RiLogoutBoxFill } from 'react-icons/ri';
import Logo from 'assets/Dashboard/db_logo.png';
import { useContextState } from 'context/context';

const DashboardSidebarMobile = () => {
  const { isLoggedIn, setIsLoggedIn } = useContextState();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.setItem('userToken', '');
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className={styles.db_sidebarContainer}>
      <div className={styles.db_sidebar}>
        <Link to="/">
        <div className={styles.db_sidebarLogo}>
          <img src={Logo} alt="Logo" />
          </div>
        </Link>
        <nav className={styles.nav}>
          <NavLink
            to={'/dashboard/overview'}
            className={({ isActive }) =>
              [styles.navItem, isActive ? styles.active : undefined].join(' ')
            }
          >
            <div className={styles.icon}>
              <MdDashboard />
            </div>
            <div className={styles.navItemTitle}>Overview</div>
          </NavLink>
          <NavLink
            to={'/dashboard/properties'}
            className={({ isActive }) =>
              [styles.navItem, isActive ? styles.active : undefined].join(' ')
            }
          >
            <div className={styles.icon}>
              <MdHouse />
            </div>
            <div className={styles.navItemTitle}>Properties</div>
          </NavLink>
          <NavLink
            to={'/dashboard/profile'}
            className={({ isActive }) =>
              [styles.navItem, isActive ? styles.active : undefined].join(' ')
            }
          >
            <div className={styles.icon}>
              <FaUser />
            </div>
            <div className={styles.navItemTitle}>Profile</div>
          </NavLink>
        </nav>

        <button className={styles.logout} onClick={handleLogout}>
          <div className={styles.logoutIcon}>
            <RiLogoutBoxFill />
          </div>
          <div className={styles.logoutColor}>Logout</div>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebarMobile;
