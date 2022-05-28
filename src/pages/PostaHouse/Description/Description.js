import React, { useState,useEffect } from 'react';
import classes from "./Description.module.css";

const Description = ({updateDisable}) => {
  const [description, setDescription] = useState({
      description: '',
      furnished: '',
  });

  useEffect(() => {
    if (description.description && description.furnished)   updateDisable(false)
    else updateDisable(true);
  }, [description])

  const handleChange =(e, name) => {
    setDescription({
      ...description,
      [name]: e.target.value,
    });
  };
  console.log(description)
  return (
    <div className={classes.mainContainer}>
      <div className={classes.Description}>
        <h3>Description</h3>
        <input
          type="text"
          id="Description"
          placeholder="E.g  A 3 bedroom flat building beautifully built on a plot of land in a lovely secured <br/> environment of Adigbe, Abeokuta. It consists of</br> 3 Bedrooms, 3 Bathrooms and 1 Garage."
          onChange={(e) => handleChange(e, 'description')}
          value={description.description}
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
          onChange={(e) => handleChange(e, 'furnished')}
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
          onChange={(e) => handleChange(e, 'furnished')}
          value={'No'}
          />
          <h3>No</h3>
        </div>
      </div>
    </div>
  );
};

export default Description;
