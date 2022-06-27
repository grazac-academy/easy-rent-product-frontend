import React from 'react';
import styles from './Bookmarks.module.css';
import ApartmentCard from 'components/ApartmentCard/ApartmentCard';
import { useContextState } from 'context/context';

const Bookmarks = () => {
  const {
    state: { bookmark }
  } = useContextState();

  return (
    <div className={styles.Apartmentlist}>
      <h1 className={styles.h1}>Bookmarks</h1>
      <div className={styles.productGrid}>
        {bookmark.map((item) => (
          <ApartmentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
