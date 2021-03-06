import React, { useState, useEffect } from 'react';
import classes from './Features.module.css';
import Stroke from 'assets/Stroke.svg';
import AdvancedSearch from 'components/AdvancedSearch/AdvancedSearch';
import { propertyTypes, bedrooms } from 'constant/index';

const Features = ({ setDisabled, data, onchange, handleAmenities }) => {
  useEffect(() => {
    if (
      data.type &&
      data.bedrooms &&
      data.bedrooms &&
      data.bathroom &&
      data.toilet &&
      data.others.length > 0
    ) {
      setDisabled(false);
    } else setDisabled(true);
    // setDisabled(false);
  }, [data]);

  const [show, setShow] = useState(false);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.Features}>
        <h3>Property type</h3>
        <select onChange={(e) => onchange(e, 'type')} value={data.type}>
          {propertyTypes.map((item) => (
            <option>{item.label}</option>
          ))}
        </select>
      </div>
      <div className={classes.FeaturesFlex}>
        <div className={classes.FeaturesFlex1}>
          <h3>Bedroom</h3>
          <select
            onChange={(e) => onchange(e, 'bedrooms')}
            value={data.bedrooms}
          >
            {bedrooms.map((item) => (
              <option>{item.label}</option>
            ))}
          </select>
        </div>
        <div className={classes.FeaturesFlex1}>
          <h3>Bathroom</h3>
          <select
            onChange={(e) => onchange(e, 'bathroom')}
            value={data.bathroom}
          >
            {bedrooms.map((item) => (
              <option>{item.label}</option>
            ))}
          </select>
        </div>
        <div className={classes.FeaturesFlex1}>
          <h3>Toilet</h3>
          <select onChange={(e) => onchange(e, 'toilet')} value={data.toilet}>
            {bedrooms.map((item) => (
              <option>{item.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={classes.Features}>
        <h3>Amenities</h3>
        <button className={classes.btn} onClick={() => setShow(true)}>
          {data.others.length === 0 && <span> More search options</span>}
          {data.others.length > 0 && <span>{data.others.join(', ')}</span>}
          <img src={Stroke} alt="stroke" />
        </button>
        {show && (
          <AdvancedSearch
            getAmenities={handleAmenities}
            close={() => setShow(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Features;
