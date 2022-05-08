import React from 'react';
import styles from './ApartmentCard.module.css';
import Bedroom from '../../Assets/Bedroom.png';
import Bathroom from '../../Assets/Bathroom.png';
import {
  MdLocationOn,
  MdBookmarkBorder,
  MdBookmark,
} from 'react-icons/md';
import { BookmarkState } from '../../Context/Context';

const ApartmentCard = ({ item }) => {
  const {
    state: { bookmark },
    dispatch,
  } = BookmarkState();
  const add = () => {
    console.log(bookmark);
    return dispatch({ type: 'ADD_BOOKMARK', payload: item });
  }
  
  return (
    <div className={styles.featuredContainer}>
      <div className={styles.featuredcard}>
        <div className={styles.cardimg}>
          <img src={item.image} alt="img" />
        </div>
        <div className={styles.cardcontent}>
          <div className={styles.apartmentprice}>
            <h1 className={styles.price}>#{item.Price}/mo</h1>
          </div>
          <div className={styles.apartmentdetails}>
            <div className={styles.location}>
              <div className={styles.locationwrap}>
                <MdLocationOn className={styles.locationicon} />
                <h3 className={styles.address}>{item.Location}</h3>
              </div>
              {bookmark.some((p) => p.id === item.id) ? (
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
              )}
            </div>
            <h2 className={styles.propertytype}>{item.PropertyType}</h2>
            <div className={styles.bedbath}>
              <div className={styles.bed}>
                <div className={styles.bedIcon}>
                  <img src={Bedroom} alt="bedicon" />
                </div>
                <h5>{item.BedroomNumber} Bedroom</h5>
              </div>
              <div className={styles.bath}>
                <div className={styles.bathIcon}>
                  <img src={Bathroom} alt="bathicon" />
                </div>
                <h5>{item.BathroomNumber} Bathroom</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
