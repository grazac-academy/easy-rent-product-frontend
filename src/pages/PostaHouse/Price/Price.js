import React from "react";
import classes from "./Price.module.css";

const Price = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.Price}>
        <h3>How much do you want to rent out?</h3>
        <input
          type="text"
          id="Price"
          placeholder="Input price"
        />
        <p>Note: Ensure you include your 5% earnings to this cost</p>
      </div>
          <h3 className={classes.h}>Is this price negotiable?</h3>
      <div className={classes.PriceFlex}>
        <div className={classes.PriceFlex1}>
          <input type="radio" id="postalCode" />
          <h3>Yes</h3>
        </div>
        <div className={classes.PriceFlex1}>
          <input type="radio" id="postalCode" placeholder="Select State" />
          <h3>No</h3>
        </div>
      </div>
    </div>
  );
};

export default Price;
