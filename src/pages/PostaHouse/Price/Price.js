import React, { useState, useEffect } from 'react';
import classes from './Price.module.css';

<<<<<<< HEAD
const Price = ({onchange, setDisabled, price}) => {

  useEffect(() => {
    if (price.amount && price.negotiable ) {
=======
const Price = ({ setDisabled, price, onchange }) => {
  useEffect(() => {
    if (price.amount && price.negotiable) {
>>>>>>> b26c5eb5700963376a0b0acf1a95cb213cd094a7
      setDisabled(false);
    } else setDisabled(true);
  }, [price]);

<<<<<<< HEAD

=======
>>>>>>> b26c5eb5700963376a0b0acf1a95cb213cd094a7
  return (
    <div className={classes.mainContainer}>
      <div className={classes.Price}>
        <h3>How much do you want to rent out?</h3>
        <input
          type="text"
          id="Price"
          placeholder="Input price"
          onChange={(e) => onchange(e, 'amount')}
          value={price.amount}
        />
        <p>Note: Ensure you include your 5% earnings to this cost</p>
      </div>
      <h3 className={classes.h}>Is this price negotiable?</h3>
      <div className={classes.PriceFlex}>
        <div className={classes.PriceFlex1}>
<<<<<<< HEAD
          <input 
          type="radio" 
          id="postalCode" 
          name='tag'
          onChange={(e) => onchange(e, 'negotiable')}
          value={'Yes'}
=======
          <input
            type="radio"
            id="postalCode"
            name="tag"
            onChange={(e) => onchange(e, 'negotiable')}
            value={'Yes'}
>>>>>>> b26c5eb5700963376a0b0acf1a95cb213cd094a7
          />
          <h3>Yes</h3>
        </div>
        <div className={classes.PriceFlex1}>
<<<<<<< HEAD
          <input 
          type="radio" 
          name='tag'
          id="postalCode" 
          placeholder="Select State" 
          onChange={(e) => onchange(e, 'negotiable')}
          value={'No'}
=======
          <input
            type="radio"
            name="tag"
            id="postalCode"
            placeholder="Select State"
            onChange={(e) => onchange(e, 'negotiable')}
            value={'No'}
>>>>>>> b26c5eb5700963376a0b0acf1a95cb213cd094a7
          />
          <h3>No</h3>
        </div>
      </div>
    </div>
  );
};

export default Price;
