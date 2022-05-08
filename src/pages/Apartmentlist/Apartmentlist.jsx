import React from 'react'
import styles from './Apartmentlist.module.css'
// import ApartmentCard from '../ApartmentCard/ApartmentCard';
import ApartmentCard from '../../components/ApartmentCard/ApartmentCard';
import { BookmarkState } from '../../Context/Context';

const Apartmentlist = () => {
    const {
      state: { apartments },
    } = BookmarkState();
  return (
    <div className={styles.Apartmentlist}>
      <div className={styles.productGrid}>
        {apartments.map((item) => (
          <ApartmentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Apartmentlist