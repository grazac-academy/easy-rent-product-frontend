import React from 'react';
import classes from './Upload.module.css';

const Upload = () => {
  return (
    <div className={classes.main}>
      <div className={classes.UploadText}>
        <h1>Add at least 5 photos of house area:</h1>
        <p>Kitchen, bathroom, toilet, bedroom, living room and other areas.</p>
      </div>
      <div className={classes.another}>
        <div className={classes.add}>
          <div className={classes.add1}>
            <div className={classes.img}>
              <h1>+</h1>
            </div>
            <h3>Add Photos</h3>
            <p>0 photos of 5 required</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
