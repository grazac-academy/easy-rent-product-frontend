import React from 'react';
import classes from './footer.module.css';

function footer({ disabled, button }) {
  return (
    <div className={classes.background}>
      <div className={classes.innerContainer}>
        <p> &#60; back</p>
        <button disabled={disabled}>{button}</button>
      </div>
    </div>
  );
}

export default footer;
