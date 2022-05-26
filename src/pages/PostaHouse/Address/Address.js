// import React from "react";
import classes from './Address.module.css';
import React, { useState } from 'react';
// import Dropdown from "components/Dropdown/Dropdown";
import { locations } from 'constants/index';
// import Select from "react-select";
import { useEffect } from 'react';

const Address = ({ updateDisable }) => {
  const [location, setLocation] = useState({
    address: '',
    code: '',
    state: '',
  });

  useEffect(() => {
    if (location.address && location.code && location.state)
      updateDisable(false);
    else updateDisable(true);
  }, [location]);
  const handleChange = (e, name) => {
    setLocation({
      ...location,
      [name]: e.target.value,
    });
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.address}>
        <h3>Address</h3>
        <input
          type="text"
          id="address"
          placeholder="Enter full address of the house"
          onChange={(e) => handleChange(e, 'address')}
          value={location.address}
        />
        <p>Note: Ensure your adress is as detailed as possible</p>
      </div>
      <div className={classes.addressFlex}>
        <div className={classes.addressFlex1}>
          <h3>postal code</h3>
          <input
            type="text"
            id="postalCode"
            placeholder="E.g 100213"
            value={location.code}
            onChange={(e) => handleChange(e, 'code')}
          />
        </div>
        <div className={classes.addressFlex1}>
          <h3>State</h3>
          <select
            value={location.state}
            onChange={(e) => handleChange(e, 'state')}
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
