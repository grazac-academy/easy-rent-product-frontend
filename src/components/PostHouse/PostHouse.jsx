import React from 'react'
import styles from './PostHouse.module.css'
import Upload from '../../Assets/Upload.png'
import takepics from '../../Assets/takepics.png'
import Createacct from '../../Assets/Createacct.png'
import Button from '../Button/Button'
import Arrow from '../../Assets/arrow.png'
import Arrowdown from '../../Assets/arrowdown.png'

function PostHouse() {
  return (
    <div className={styles.post_house}>
      <h1> Post a House</h1>
      <p>Post a picture of your house to connect with a tenant</p>
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
      <Button text='Post a House' />
    </div>
  );
};

export default PostHouse