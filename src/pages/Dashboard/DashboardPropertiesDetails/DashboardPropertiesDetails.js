import React from "react";
import classes from "./DashboardPropertiesDetails.module.css";
import bathroom from "assets/Vector (1).svg";
import garage from "assets/Vector (2).svg";
import bedroom from "assets/Vector(3).svg";
import location from "assets/location.svg";
import { useState } from "react";
import data from "constant/Data";
import Add from "assets/add.svg";
import Toggle from "assets/toggle.svg";

const Properties = () => {
  const [img, setImg] = useState(data.images[0]);
  const [toggle, setToggle] = useState(true);

  const handleImg = (index) => {
    setImg(data.images[index]);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={classes.main}>
      <div className={classes.innerContainer}>
        <div className={classes.details}>
          <div className={classes.upperFlex}>
            <div className={classes.upperText}>
              <h3>{data.BedroomNumber} Bedroom flat</h3>
              <div className={classes[data.css]}>{data.status}</div>
            </div>
            <div className={classes.location}>
              <img src={location} alt="image" />
              <p>
                {data.Location}, {data.City}
              </p>
            </div>
          </div>
          <div className={classes.amount}>
            <div className={classes.edit}>
              <div className={classes.editFlex}>
                <img src={Add} alt="add" />
                <h3>Edit Property</h3>
              </div>
              <div className={classes.toggle} onClick={handleToggle}>
                {toggle ? (
                  <img src={Toggle} alt="toggle" />
                ) : (
                  <img src={Toggle} alt="toggle" />
                )}
              </div>
            </div>
              {!toggle ? (
                <div>
                  <div className={classes.dropDown}>
                    <div className={classes.disable}>
                      <img src={Add} alt="add" />
                      <h3>Disable</h3>
                    </div>
                    <div className={classes.delete}>
                      <img src={Add} alt="add" />
                      <h3>Delete</h3>
                    </div>
                  </div>
                </div>
              ) : null}
          </div>
        </div>

        <div className={classes.imgContainer}>
          <div className={classes.images}>
            <img src={img} alt="image" />
          </div>
          <div className={classes.gridimg}>
            {data.images.map((item, index) => (
              <div
                key={index}
                className={classes.images1}
                onClick={() => handleImg(index)}
              >
                <img src={item} alt="img" />
              </div>
            ))}
          </div>
        </div>
        <div className={classes.section2}>
          <div className={classes.sect}>
            <div className={classes.bedrooms}>
              <div className={classes.bed3}>
                <div className={classes.bedImg}>
                  <img src={bedroom} alt="bed" />
                </div>
                <p>{data.BedroomNumber} Bedroom</p>
              </div>
              <div className={classes.bed3}>
                <div className={classes.bedImg}>
                  <img src={bathroom} alt="bed" />
                </div>
                <p>{data.BathroomNumber} Bathroom</p>
              </div>
              <div className={classes.bed3}>
                <div className={classes.bedImg}>
                  <img src={garage} alt="bed" />
                </div>
                <p>{data.GarageNumber} Garage</p>
              </div>
            </div>
            <div className={classes.description}>
              <h2>Description</h2>
              <p>{data.Description}</p>
            </div>
            <div>
              <ul className={classes.houseFeatures}>
                <h2>House Features</h2>
                {data.Amenities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={classes.Price}>
            #{data.Price}/<span>mo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
