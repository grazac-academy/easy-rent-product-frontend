import React from 'react';
import styles from './ApartmentCard.module.css';
import Bedroom from '../../Assets/Bedroom.png';
import Bathroom from '../../Assets/Bathroom.png';
import { MdLocationOn, MdBookmarkBorder } from 'react-icons/md';

const ApartmentCard= ({ item }) => {
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
              <MdBookmarkBorder className={styles.bookmark} />
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
