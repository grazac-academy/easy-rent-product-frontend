import React from "react";
import classes from "./Features.module.css";

const Features = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.Features}>
        <h3>Property type</h3>
        <input type="text" id="Features" placeholder="Choose Property Type" />
      </div>
      <div className={classes.FeaturesFlex}>
        <div className={classes.FeaturesFlex1}>
          <h3>Bedroom</h3>
          <input type="text" id="postalCode" placeholder="E.g 1" />
        </div>
        <div className={classes.FeaturesFlex1}>
          <h3>Bathroom</h3>
          <input type="text" id="postalCode" placeholder="E.g 1" />
        </div>
        <div className={classes.FeaturesFlex1}>
          <h3>Toilet</h3>
          <input type="text" id="postalCode" placeholder="E.g 1" />
        </div>
      </div>

      <div className={classes.Features}>
        <h3>Property type</h3>
        <input type="text" id="Features" placeholder="Choose Property Type" />
      </div>
    </div>
  );
};

export default Features;
