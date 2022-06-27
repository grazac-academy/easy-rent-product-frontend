import React from 'react';
import styles from './DashboardProperties.module.css';
import { IoSearchOutline } from 'react-icons/io5';
import { useContextState } from 'context/context';
import DashboardApartmentCard from './../DashboardProperties/DashboardApartmentCard/DashboardApartmentCard';
import { useState } from 'react';
import Pagination from 'components/Pagination/Pagination';

const DashboardProperties = () => {
  const {
    state: { apartments },
  } = useContextState();

  // const [houses, sethouses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [housesPerPage] = useState(8);

  const indexOfLasthouse = currentPage * housesPerPage;
  const indexOfFirsthouse = indexOfLasthouse - housesPerPage;
  const currentHouses = apartments.slice(indexOfFirsthouse, indexOfLasthouse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.Container}>
      <div className={styles.overviewTop}>
        <div className={styles.portfolio}>
          <h1>My Properties</h1>
          <p>This is your property portfolio report</p>
        </div>
        <form className={styles.searchBar}>
          <IoSearchOutline fontSize={'25'} />
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <div className={styles.properties}>
        {currentHouses.map((item) => (
          <DashboardApartmentCard key={item.id} item={item} />
        ))}
      </div>
      <Pagination
        housesPerPage={housesPerPage}
        apartments={apartments.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default DashboardProperties;
