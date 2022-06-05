import React, { useState, useEffect } from 'react';
import classes from './Features.module.css';

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

  return (
    <div className={classes.mainContainer}>
      <div className={classes.Features}>
        <h3>Property type</h3>
        <input
          type="text"
          id="Features"
          placeholder="Choose Property Type"
          onChange={(e) => onchange(e, 'type')}
          value={data.type}
        />
      </div>
      <div className={classes.FeaturesFlex}>
        <div className={classes.FeaturesFlex1}>
          <h3>Bedroom</h3>
          <input
            type="text"
            id="postalCode"
            placeholder="E.g 1"
            onChange={(e) => onchange(e, 'bedrooms')}
            value={data.bedrooms}
          />
        </div>
        <div className={classes.FeaturesFlex1}>
          <h3>Bathroom</h3>
          <input
            type="text"
            id="postalCode"
            placeholder="E.g 1"
            onChange={(e) => onchange(e, 'bathroom')}
            value={data.bathroom}
          />
        </div>
        <div className={classes.FeaturesFlex1}>
          <h3>Toilet</h3>
          <input
            type="text"
            id="postalCode"
            placeholder="E.g 1"
            onChange={(e) => onchange(e, 'toilet')}
            value={data.toilet}
          />
        </div>
      </div>

      <div className={classes.Features}>
        <h3>Property type</h3>
        <input
          type="text"
          id="Features"
          placeholder="Choose Property Type"
          onChange={(e) => onchange(e, 'others')}
          value={data.others}
        />
      </div>
    </div>
  );
};

export default Features;
