import React from "react";
import classes from "./House.module.css";
import PostImage from "assets/PostAHouse.svg";
// import Verified from 'components/Verified/Verified';
import Faq from "components/Faq/Faq";


function House() {
  return (
    <div className={classes.main}>
      <div className={classes.innerContainer}>
        <div className={classes.content}>
          <h3>EasyRent Landlords</h3>
          <h1>Earn 5% when a new tenant rents your apartment</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className={classes.btn}>
            <button>Post a house</button>
          </div>
        </div>
        <div className={classes.image}>
          <img src={PostImage} alt="imagepost" />
        </div>
      </div>
      {/* <Verified/> */}
      <Faq />
    </div>
  );
}

export default House;
