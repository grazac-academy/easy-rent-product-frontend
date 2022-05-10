import React from 'react';
import styles from './FeauturedApartment.module.css';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import Button from './../Button/Button';
import { useBookmarkState } from '../../context/context';
import { Link } from 'react-router-dom';

const FeaturedApartment = () => {
  const {
    state: { apartments },
  } = useBookmarkState();
  return (
    <div className={styles.FeaturedApartmentContainer}>
      <div className={styles.FeaturedApartmentTitle}>
        <h2>Featured Apartments</h2>
        <p>Browse through our array of properties available</p>
      </div>
      <div className={styles.productGrid}>
        {apartments.slice(0, 6).map((item) => (
          <ApartmentCard key={item.id} item={item} />
        ))}
      </div>
      <Link to="/apartmentlist">
        <Button text="View All" />
      </Link>
    </div>
  );
};
export default FeaturedApartment;
