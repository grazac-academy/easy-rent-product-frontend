import React from 'react';
import styles from './Apartmentlist.module.css';
// import ApartmentCard from '../ApartmentCard/ApartmentCard';
import ApartmentCard from 'components/ApartmentCard/ApartmentCard';
import { useBookmarkState } from '../../context/context';
import PropertyListing from 'components/PropertyListing/Propertylisting';
const Apartmentlist = () => {
  const {
    state: { apartments },
  } = useBookmarkState();
  return (
    <div className={styles.Apartmentlist}>
      <PropertyListing />
      <div className={styles.productGrid}>
        {apartments.map((item) => (
          <ApartmentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Apartmentlist;
