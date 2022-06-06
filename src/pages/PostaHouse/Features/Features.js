import React, { useState, useEffect } from 'react';
import classes from './Features.module.css';

<<<<<<< HEAD
const Features = ({onchange, setDisabled, data}) => {

  useEffect(() => {
    if (data.type && data.bedrooms && data.bathroom && data.toilet && data.others ) {
      setDisabled(false);
    } else setDisabled(true);
  }, [data]);


=======
const Features = ({ setDisabled, data, onchange }) => {
  useEffect(() => {
    if (
      data.type &&
      data.bedrooms &&
      data.bedrooms &&
      data.bathroom &&
      data.toilet &&
      data.others
    ) {
      setDisabled(false);
    } else setDisabled(true);
  }, [data]);

>>>>>>> b26c5eb5700963376a0b0acf1a95cb213cd094a7
  return (
    <div className={classes.mainContainer}>
      <div className={classes.Features}>
        <h3>Property type</h3>
<<<<<<< HEAD
        <input 
        type="text" 
        id="Features" 
        placeholder="Choose Property Type" 
        onChange={(e) => onchange(e, 'type')}
=======
        <input
          type="text"
          id="Features"
          placeholder="Choose Property Type"
          onChange={(e) => onchange(e, 'type')}
>>>>>>> b26c5eb5700963376a0b0acf1a95cb213cd094a7
          value={data.type}
        />
      </div>
      <div className={classes.FeaturesFlex}>
        <div className={classes.FeaturesFlex1}>
          <h3>Bedroom</h3>
<<<<<<< HEAD
          <input 
          type="text" 
          id="postalCode" 
          placeholder="E.g 1" 
          onChange={(e) => onchange(e, 'bedrooms')}
          value={data.bedrooms}
=======
          <input
            type="text"
            id="postalCode"
            placeholder="E.g 1"
            onChange={(e) => onchange(e, 'bedrooms')}
            value={data.bedrooms}
>>>>>>> b26c5eb5700963376a0b0acf1a95cb213cd094a7
          />
        </div>
        <div className={classes.FeaturesFlex1}>
          <h3>Bathroom</h3>
<<<<<<< HEAD
          <input 
          type="text" 
          id="postalCode" 
          placeholder="E.g 1" 
          onChange={(e) =>onchange(e, 'bathroom')}
          value={data.bathroom}
=======
          <input
            type="text"
            id="postalCode"
            placeholder="E.g 1"
            onChange={(e) => onchange(e, 'bathroom')}
            value={data.bathroom}
>>>>>>> b26c5eb5700963376a0b0acf1a95cb213cd094a7
          />
        </div>
        <div className={classes.FeaturesFlex1}>
          <h3>Toilet</h3>
<<<<<<< HEAD
          <input 
          type="text" 
          id="postalCode" 
          placeholder="E.g 1" 
          onChange={(e) => onchange(e, 'toilet')}
          value={data.toilet}
=======
          <input
            type="text"
            id="postalCode"
            placeholder="E.g 1"
            onChange={(e) => onchange(e, 'toilet')}
            value={data.toilet}
>>>>>>> b26c5eb5700963376a0b0acf1a95cb213cd094a7
          />
        </div>
      </div>

      <div className={classes.Features}>
        <h3>Property type</h3>
<<<<<<< HEAD
        <input 
        type="text" 
        id="Features" 
        placeholder="Choose Property Type" 
        onChange={(e) => onchange(e, 'others')}
=======
        <input
          type="text"
          id="Features"
          placeholder="Choose Property Type"
          onChange={(e) => onchange(e, 'others')}
>>>>>>> b26c5eb5700963376a0b0acf1a95cb213cd094a7
          value={data.others}
        />
      </div>
    </div>
  );
};

export default Features;
