import React from 'react';
import styles from './Apartmentlist.module.css';
<<<<<<< HEAD
import ApartmentCard from 'components/ApartmentCard/ApartmentCard';
import { useBookmarkState } from 'context/context';
=======
// import ApartmentCard from '../ApartmentCard/ApartmentCard';
import ApartmentCard from 'components/ApartmentCard/ApartmentCard';
import { useBookmarkState } from '../../context/context';
>>>>>>> main

const Apartmentlist = () => {
  const {
    state: { apartments },
  } = useBookmarkState();
  return (
    <div className={styles.Apartmentlist}>
      <div className={styles.productGrid}>
        {apartments.map((item) => (
          <ApartmentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Apartmentlist;
