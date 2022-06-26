import React, { useEffect } from 'react';
import styles from './Apartmentlist.module.css';
import ApartmentCard from 'components/ApartmentCard/ApartmentCard';
// import { useContextState } from '../../context/context';
import PropertyListing from 'components/PropertyListing/Propertylisting';
import { useContextState } from 'context/context';

const Apartmentlist = () => {
  const {
    state: { apartments },
  } = useContextState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
