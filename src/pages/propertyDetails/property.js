import React from "react";
import classes from "./property.module.css";
import BigImage from "../../assets/big_img.svg";
import Image1 from "../../assets/img1.svg";
import Image2 from "../../assets/img2.svg";
import Image3 from "../../assets/img3.svg";
import Image4 from "../../assets/img4.svg";
import Image5 from "../../assets/img5.svg";
// import Image6 from "../../assets/img6.svg";
import vector1 from "../../assets/Vector (1).svg";
import vector2 from "../../assets/Vector (2).svg";
import vector3 from "../../assets/Vector(3).svg";
import location from "../../assets/location.svg";

const property = () => {
  return (
    <div className={classes.main}>
      <div className={classes.innerContainer}>
        <div className={classes.upperText}>
          <p>Home</p>
          <h3>3 Bedroom flat</h3>
        </div>
        <div className={classes.details}>
          <div className={classes.location}>
            <img src={location} alt="image" />
            <p>Adigbe, Abeokuta</p>
          </div>
          <div className={classes.amount}>
            <h3>N10,000/mo</h3>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <div className={classes.images1}>
            <img src={BigImage} alt="image" />
          </div>

          <div className={classes.gridimg}>
            {/* <img src={BigImage} alt="image" /> */}
            <div className={classes.images}>
              <img src={Image1} alt="image" />
            </div>
            <div className={classes.images}>
              <img src={Image2} alt="image" />
            </div>
            <div className={classes.images}>
              <img src={Image3} alt="image" />
            </div>
            <div className={classes.images}>
              <img src={Image4} alt="image" />
            </div>
            <div className={classes.images}>
              <img src={Image5} alt="image" />
            </div>
            <div className={classes.images}>
              <img src={Image5} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default property;
