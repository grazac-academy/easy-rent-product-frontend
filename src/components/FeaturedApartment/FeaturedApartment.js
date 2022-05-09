import React from 'react';
import styles from './FeauturedApartment.module.css';
import Array from '../../constant/Array';
import ApartmentCard from 'components/ApartmentCard/ApartmentCard';
import Button from 'components/Button/Button';

export default function FeaturedApartment() {
  return (
    <div className={styles.FeaturedApartmentContainer}>
      <div className={styles.FeaturedApartmentTitle}>
        <h2>Featured Apartments</h2>
        <p>Browse through our array of properties available</p>
      </div>
      <div className={styles.productGrid}>
        {Array.map((item) => (
          <ApartmentCard key={item.id} item={item} />
        ))}
      </div>
      <Button text="View All" />
    </div>
  );
}
