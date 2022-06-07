import React from 'react';
import styles from './DashboardOverview.module.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { MdHouse } from 'react-icons/md';
import OverviewCard from './OverviewCard/OverviewCard';
import { useBookmarkState } from 'context/context';
import DashboardApartmentCard from './../DashboardProperties/DashboardApartmentCard/DashboardApartmentCard';

const overviewData = [
  {
    number: '16',
    title: 'All properties',
    css: 'yellow',
  },
  {
    number: '13',
    title: 'Active properties',
    css: 'green',
  },
  {
    number: '3',
    title: 'Inactive properties',
    css: 'red',
  },
];

const DashboardOverview = () => {
  const {
    state: { apartments },
  } = useBookmarkState();

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.overviewTop}>
          <div className={styles.portfolio}>
            <h1>Welcome, Chris</h1>
            <p>This is your property portfolio report</p>
          </div>
          <div>
            <Link to={'/dashboard/posthouse'} className={styles.navItem}>
              <div className={styles.icon}>
                <BiMessageSquareAdd />
              </div>
              <div className={styles.navItemTitle}>Post a House</div>
            </Link>
          </div>
        </div>
        <div className={styles.overviewBottom}>
          {overviewData.map((item, index) => (
            <OverviewCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div className={styles.Container}>
        <div className={styles.overviewTop}>
          <div className={styles.portfolio}>
            <h1>Welcome, Chris</h1>
            <p>This is your property portfolio report</p>
          </div>
          <Link to={'/dashboard/properties'} className={styles.viewAll}>
            View All
          </Link>
        </div>
        <div className={styles.overviewProperties}>
          {apartments.slice(0, 6).map((item) => (
            <DashboardApartmentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardOverview;
