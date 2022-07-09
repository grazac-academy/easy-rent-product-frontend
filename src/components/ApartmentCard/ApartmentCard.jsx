import React from 'react';
import styles from './ApartmentCard.module.css';
import Bedroom from 'assets/Bedroom.png';
import Bathroom from 'assets/Bathroom.png';
import { MdLocationOn, MdBookmarkBorder, MdBookmark } from 'react-icons/md';
import { useContextState } from 'context/context';
import { Link } from 'react-router-dom';

const ApartmentCard = ({ item }) => {
  const {
    state: { bookmark },
    dispatch,
    isLoggedIn,
  } = useContextState();

  const add = () => {
    return dispatch({ type: 'ADD_BOOKMARK', payload: item });
  };

  return (
    <div className={styles.featuredContainer}>
      <div className={styles.featuredcard}>
        <Link to={`/apartmentlist/${item.id}`} className={styles.cardimg}>
          <img src={item.image} alt="img" />
        </Link>
        <div className={styles.cardcontent}>
          <div className={styles.apartmentprice}>
            <h1 className={styles.price}>#{item.price}/mo</h1>
          </div>
          <div className={styles.apartmentdetails}>
            <div className={styles.location}>
              <div className={styles.locationwrap}>
                <MdLocationOn className={styles.locationicon} />
                <h3 className={styles.address}>{item.location}</h3>
              </div>
              {isLoggedIn &&
                (bookmark.some((p) => p.id === item.id) ? (
                  <button
                    className={styles.bookmarkbtn}
                    onClick={() => {
                      dispatch({ type: 'REMOVE_BOOKMARK', payload: item });
                    }}
                  >
                    <MdBookmark className={styles.bookmark} />
                  </button>
                ) : (
                  <button className={styles.bookmarkbtn} onClick={add}>
                    <MdBookmarkBorder className={styles.bookmark} />
                  </button>
                ))}
            </div>
            <h2 className={styles.propertytype}>{item.propertyType}</h2>
            <div className={styles.bedbath}>
              <div className={styles.bed}>
                <div className={styles.bedIcon}>
                  <img src={Bedroom} alt="bedicon" />
                </div>
                <h5>{item.bedroomNumber} Bedroom</h5>
              </div>
              <div className={styles.bath}>
                <div className={styles.bathIcon}>
                  <img src={Bathroom} alt="bathicon" />
                </div>
                <h5>{item.bathroomNumber} Bathroom</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
