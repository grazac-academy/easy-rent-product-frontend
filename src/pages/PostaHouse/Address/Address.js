// import React from "react";
import classes from './Address.module.css';
import React, { useState } from 'react';
// import Dropdown from "components/Dropdown/Dropdown";
import { locations } from 'constant/index';
// import Select from "react-select";
import { useEffect } from 'react';

const Address = ({ onchange, details, setDisabled }) => {
  useEffect(() => {
    if (details.street && details.city && details.state) {
      setDisabled(false);
    } else setDisabled(true);
  }, [details]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.address}>
        <h3>Address</h3>
        <input
          type="text"
          id="street"
          placeholder="Enter full address of the house"
          onChange={(e) => onchange(e, 'street')}
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
            onChange={(e) => onchange(e, 'city')}
          />
        </div>
        <div className={classes.addressFlex1}>
          <h3>State</h3>
          <select value={details.state} onChange={(e) => onchange(e, 'state')}>
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
