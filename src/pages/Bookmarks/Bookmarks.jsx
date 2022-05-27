import React from 'react';
import styles from './Bookmarks.module.css';
import ApartmentCard from 'components/ApartmentCard/ApartmentCard';
import { useBookmarkState } from 'context/context';

const Bookmarks = () => {
  const {
    state: { apartments, bookmark },
    dispatch,
  } = useBookmarkState();

  return (
    <div className={styles.Apartmentlist}>
      <div className={styles.productGrid}>
        {apartments.slice(0, 6).map((item) => (
          <ApartmentCard key={item.id} item={item} />
        ))}

        {bookmark.map((item) => (
          <ApartmentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
