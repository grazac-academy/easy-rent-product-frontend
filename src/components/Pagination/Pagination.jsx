import React from 'react';
import styles from './Pagination.module.css';
import { NavLink } from 'react-router-dom';

const Pagination = ({ housesPerPage, apartments, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(apartments / housesPerPage); i++) {
    pageNumbers.push(i);
  }
  

  return (
    <div className ={styles.paginationContainer}>
      <div className={styles.pagination}>
        {pageNumbers.map((number) => (
          <span
                // to=""
                key={number}
                onClick={() => paginate(number)}
                className={styles.pageItem}
          >
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
