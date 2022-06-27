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
      <div className={styles.productGrid}>
        {bookmark.map((item) => (
          <ApartmentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
