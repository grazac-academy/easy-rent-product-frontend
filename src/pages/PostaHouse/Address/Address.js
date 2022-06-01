// import React from "react";
import classes from './Address.module.css';
import React, { useState } from 'react';
// import Dropdown from "components/Dropdown/Dropdown";
import { locations } from 'constant/index';
// import Select from "react-select";
import { useEffect } from 'react';

const Address = ({ updateDisable, details }) => {
  // const [location, setLocation] = useState({
  //   address: '',
  //   city: '',
  //   state: '',
  // });

  // useEffect(() => {
  //   if (location.address && location.city && location.state)
  //     updateDisable(false);
  //   else updateDisable(true);
  // }, [location]);
  // const handleChange = (e, name) => {
  //   setLocation({
  //     ...location,
  //     [name]: e.target.value,
  //   });
  // };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.address}>
        <h3>Address</h3>
        <input
          type="text"
          id="address"
          placeholder="Enter full address of the house"
          // onChange={(e) => handleChange(e, 'address')}
          value={details.street}
        />
        <p>Note: Ensure your adress is as detailed as possible</p>
      </div>
      <div className={classes.addressFlex}>
        <div className={classes.addressFlex1}>
          <h3>City</h3>
          <input
            type="text"
            id="postalCode"
            placeholder="E.g Abeokuta"
            value={details.city}
            // onChange={(e) => handleChange(e, 'city')}
          />
        </div>
        <div className={classes.addressFlex1}>
          <h3>State</h3>
          <select
            value={details.state}
            // onChange={(e) => handleChange(e, 'state')}
          >
            {locations.map((item) => (
              <option>{item.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Address;
