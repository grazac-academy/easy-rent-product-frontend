import React from 'react';
import styles from './Pagination.module.css';
import {Link } from 'react-router-dom';

const Pagination = ({ housesPerPage, apartments, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(apartments / housesPerPage); i++) {
    pageNumbers.push(i);
  }
  

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.pagination}>
        <Link
          class="pageItem"
          to={currentPage - 1}
          onClick={() => paginate(currentPage - 1)}
        >
          <span>&laquo;</span>
        </Link>

        {pageNumbers.map((number) => (
          <Link
            key={number}
            onClick={() => paginate(number)}
            className={`pageItem ${
              currentPage === number ? 'pageItem-active' : ''
            }`}
            to={number}
          >
            {number}
          </Link>
        ))}
        <Link
          class="pageItem"
          to={currentPage + 1}
          onClick={() => paginate(currentPage + 1)}
        >
          <span>&raquo;</span>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
