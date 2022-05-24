import React from "react";
import classes from "./Address.module.css";

const Address = () => {
  return (
   
        <div className={classes.mainContainer}>
          <div className= {classes.address}>
            <h3>Address</h3>
            <input type="text" id="address" placeholder="Enter full address of the house"/>
            <p>Note: Ensure your adress is as detailed as possible</p>
          </div>
          <div className={classes.addressFlex}>
            <div className={classes.addressFlex1}>
              <h3>postal code</h3>
              <input type="text" id="postalCode" placeholder="E.g 100213"/>
            </div>
            <div className={classes.addressFlex1}>
              <h3>State</h3>
              <input type="text" id="postalCode" placeholder="Select State"/>
            </div>
          </div>
        </div>
  );
};

export default Address;