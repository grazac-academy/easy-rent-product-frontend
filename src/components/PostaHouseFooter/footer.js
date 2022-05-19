import React from "react";
import classes from "./footer.module.css";

function footer() {
  return (
    <div className={classes.background}>
      <div className={classes.innerContainer}>
        <p> &#60; back</p>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default footer;