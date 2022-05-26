// import React from "react";
import classes from "./Address.module.css";
import React, { useState } from 'react';
// import Dropdown from "components/Dropdown/Dropdown";
import { locations } from "constants/index";
// import Select from "react-select";



const Address = () => {
  const [address, setAddress] = useState("");
  console.log(address)
  return (
   
        <div className={classes.mainContainer}>
          <div className= {classes.address}>
            <h3>Address</h3>
            <input 
            type="text" 
            id="address"  
            placeholder="Enter full address of the house" 
            onChange={(e) => setAddress(e.target.value)}
            value={address} 
            />
            <p>Note: Ensure your adress is as detailed as possible</p>
          </div>
          <div className={classes.addressFlex}>
            <div className={classes.addressFlex1}>
              <h3>postal code</h3>
              <input type="text" id="postalCode" placeholder="E.g 100213"/>
            </div>
            <div className={classes.addressFlex1}>
              <h3>State</h3>
              <select >
                {locations.map((item) => (<option>
                  {item.label}
                </option>))}
              </select>
              {/* <Select 
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={locations}
              isSearchable={true}
              placeholder={ 'Select state' }
              classNamePrefix="address-select"
              className="address-select-container"
              /> */}
              {/* <Dropdown 
              options={locations}
              placeholder={'State'}
              
              // placeholder={States}
              /> */}
              {/* <input type="text" id="postalCode" placeholder="Select State"/> */}
            </div>
          </div>
        </div>
  );
};

export default Address;