import React from 'react';
import styles from './DashboardApartmentCard.module.css';
import Bedroom from 'assets/Bedroom.png';
import Bathroom from 'assets/Bathroom.png';
import { MdLocationOn, MdBookmarkBorder, MdBookmark } from 'react-icons/md';
import { useBookmarkState } from 'context/context';
import { fadeIn } from 'react-animations';

const DashboardApartmentCard = ({ item }) => {
  const {
    state: { bookmark },
    dispatch,
  } = useBookmarkState();
  const add = () => {
    return dispatch({ type: 'ADD_BOOKMARK', payload: item });
  };

  return (
    <div className={styles.featuredContainer}>
      <div className={styles.featuredcard}>
        <div className={styles.cardimg}>
          <img src={item.image} alt="img" />
        </div>
        <div className={styles.cardcontent}>
          <div className={styles.apartmentdetails}>
            <div className={styles.location}>
              <div className={styles.locationwrap}>
                <MdLocationOn className={styles.locationicon} />
                <h3 className={styles.address}>{item.location}</h3>
              </div>
              <div className={styles.apartmentprice}>
                <h1 className={styles.price}>#{item.price}/mo</h1>
              </div>
            </div>
            <div className={styles.propertytypeDiv}>
              <h2 className={styles.propertytype}>{item.propertyType}</h2>
              <span className={styles[item.status]}></span>
            </div>
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

export default DashboardApartmentCard;
