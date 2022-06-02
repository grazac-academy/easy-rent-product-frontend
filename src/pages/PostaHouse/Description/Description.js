import React, { useState,useEffect } from 'react';
import classes from "./Description.module.css";

const Description = ({onchange, setDisabled, info}) => {

  useEffect(() => {
    if (info.desc && info.furnished ) {
      setDisabled(false);
    } else setDisabled(true);
  }, [info]);


  return (
    <div className={classes.mainContainer}>
      <div className={classes.Description}>
        <h3>Description</h3>
        <input
          type="text"
          id="Description"
          placeholder="E.g  A 3 bedroom flat building beautifully built on a plot of land in a lovely secured <br/> environment of Adigbe, Abeokuta. It consists of</br> 3 Bedrooms, 3 Bathrooms and 1 Garage."
          onChange={(e) => onchange(e, 'desc')}
          value={info.desc}
        />
        <p>Note: Use the example above as a guide</p>
      </div>
      <h3 className={classes.h}>Is it furnished?</h3>
      <div className={classes.DescriptionFlex}>
        <div className={classes.DescriptionFlex1}>
          <input 
          type="radio" 
          name="desc" 
          id="postalCode" 
          onChange={(e) => onchange(e, 'furnished')}
          value={'Yes'}
          />
          <h3>Yes</h3>
        </div>
        <div className={classes.DescriptionFlex1}>
          <input 
          type="radio" 
          name="desc" 
          id="postalCode" 
          placeholder="Select State" 
          onChange={(e) => onchange(e, 'furnished')}
          value={'No'}
          />
          <h3>No</h3>
        </div>
      </div>
    </div>
  );
};

export default Description;
