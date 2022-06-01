import React, { useState,useEffect } from "react";
import classes from "./Price.module.css";

const Price = ({updateDisable, price}) => {
//   const [price, setPrice] = useState({
//     amount: '',
//     negotiable: '',
// });

// useEffect(() => {
//   if (price.amount && price.negotiable)   updateDisable(false)
//   else updateDisable(true);
// }, [price])

// const handleChange =(e, name) => {
//   setPrice({
//     ...price,
//     [name]: e.target.value,
//   });
// };
// console.log(price)
  return (
    <div className={classes.mainContainer}>
      <div className={classes.Price}>
        <h3>How much do you want to rent out?</h3>
        <input
          type="text"
          id="Price"
          placeholder="Input price"
          // onChange={(e) => handleChange(e, 'amount')}
          value={price.amount}
        />
        <p>Note: Ensure you include your 5% earnings to this cost</p>
      </div>
          <h3 className={classes.h}>Is this price negotiable?</h3>
      <div className={classes.PriceFlex}>
        <div className={classes.PriceFlex1}>
          <input 
          type="radio" 
          id="postalCode" 
          name='tag'
          // onChange={(e) => handleChange(e, 'negotiable')}
          value={'Yes'}
          />
          <h3>Yes</h3>
        </div>
        <div className={classes.PriceFlex1}>
          <input 
          type="radio" 
          name='tag'
          id="postalCode" 
          placeholder="Select State" 
          // onChange={(e) => handleChange(e, 'negotiable')}
          value={'No'}
          />
          <h3>No</h3>
        </div>
      </div>
    </div>
  );
};

export default Price;
