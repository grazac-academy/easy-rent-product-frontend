import React, { useState,useEffect } from "react";
import classes from "./Features.module.css";

const Features = ({updateDisable, data}) => {
//   const [feature, setFeature] = useState({
//     propertyType: '',
//     bedroom: '',
//     bathroom: '',
//     toilet: '',
//     others: '',
// });

// useEffect(() => {
//   if (feature.propertyType && feature.bedroom && feature.bathroom && feature.toilet && feature.others)   updateDisable(false)
//   else updateDisable(true);
// }, [feature])


// const handleChange =(e, name) => {
//   setFeature({
//     ...feature,
//     [name]: e.target.value,
//   });
// };

// console.log(feature)
  return (
    <div className={classes.mainContainer}>
      <div className={classes.Features}>
        <h3>Property type</h3>
        <input 
        type="text" 
        id="Features" 
        placeholder="Choose Property Type" 
        // onChange={(e) => handleChange(e, 'propertyType')}
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
          // onChange={(e) => handleChange(e, 'bedroom')}
          value={data.bedrooms}
          />
        </div>
        <div className={classes.FeaturesFlex1}>
          <h3>Bathroom</h3>
          <input 
          type="text" 
          id="postalCode" 
          placeholder="E.g 1" 
          // onChange={(e) => handleChange(e, 'bathroom')}
          value={data.bathroom}
          />
        </div>
        <div className={classes.FeaturesFlex1}>
          <h3>Toilet</h3>
          <input 
          type="text" 
          id="postalCode" 
          placeholder="E.g 1" 
          // onChange={(e) => handleChange(e, 'toilet')}
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
        // onChange={(e) => handleChange(e, 'others')}
          value={data.others}
        />
      </div>
    </div>
  );
};

export default Features;
