import React from 'react'
import styles from './OverviewCard.module.css'
import { MdHouse } from 'react-icons/md';


const OverviewCard = ({number, title, css}) => {
  return (
    <div className={styles.overviewCard}>
      <div className={`${styles.cardIcon}, ${styles[css]}`}>
        <MdHouse />
      </div>
      <div className={styles.cardDetails}>
        <h1>{number}</h1>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default OverviewCard