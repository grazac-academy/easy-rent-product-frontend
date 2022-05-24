import React from "react";
import classes from "./Photo.module.css";
import Mark from "../../../assets/mark.svg";

const Photo = () => {
  return (
    <div className={classes.main}>
      <h1>Before adding photo</h1>
      <div className={classes.innerContainer}>
        <div className={classes.textContainer}>
          <h1>Photos must:</h1>
          <div className={classes.textFlex}>
            <img src={Mark} alt="photo" />
            <p>Not more than 500kb</p>
          </div>

          <div className={classes.textFlex}>
            <img src={Mark} alt="photo" />
            <p>Only jpeg and png formats are allowed</p>
          </div>

          <div className={classes.textFlex}>
            <img src={Mark} alt="photo" />
            <p>Be horizontal/landscape </p>
          </div>

          <div className={classes.textFlex}>
            <img src={Mark} alt="photo" />
            <p>Be clear and well lit</p>
          </div>

          <div className={classes.textFlex}>
            <img src={Mark} alt="photo" />
            <p>Show a clean and tidy home</p>
          </div>

          <div className={classes.textFlex}>
            <img src={Mark} alt="photo" />
            <p>Have no watermarks, logos, pets or people</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
