import React from 'react'
import styles from './PostHouse.module.css';
import Upload from 'assets/Upload.png';
import takepics from 'assets/takepics.png';
import Createacct from 'assets/Createacct.png';

import Arrow from 'assets/arrow.png';
import Arrowdown from 'assets/arrowdown.png';

const PostHouseSteps = () => {
  return (
    <div className={styles.post_house_flex}>
      <div className={styles.post_house_innerdiv}>
        <div className={styles.img_div}>
          <img src={Createacct} alt="user" />
        </div>
        <h3>To post a picture, you need to create an account first</h3>
      </div>
      <div className={styles.post_house_innerdiv}>
        <div className={styles.img_div}>
          <img src={takepics} alt="user" />
        </div>
        <h3>Take a clear picture of the house and upload</h3>
      </div>
      <div className={styles.post_house_innerdiv}>
        <div className={styles.img_div}>
          <img src={Upload} alt="user" />
        </div>
        <h3>Upload the pictures taken to enable tenants find a home</h3>
      </div>
      <div className={styles.arrow1}>
        <img src={Arrow} alt="arrow" />
      </div>
      <div className={styles.arrow2}>
        <img src={Arrow} alt="arrow" />
      </div>
      <div className={styles.arrow3}>
        <img src={Arrowdown} alt="arrow" />
      </div>
      <div className={styles.arrow4}>
        <img src={Arrowdown} alt="arrow" />
      </div>
    </div>
  );
}

export default PostHouseSteps