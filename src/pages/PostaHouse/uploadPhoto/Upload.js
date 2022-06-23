import React, { useState } from 'react';
import classes from './Upload.module.css';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const Upload = ({
  selectedImages,
  handleUpload,
  deleteImage,
  handleSelect,
}) => {

  return (
    <div className={classes.main}>
      <div className={classes.UploadText}>
        <h1>Add at least 5 photos of house area:</h1>
        <p>Kitchen, bathroom, toilet, bedroom, living room and other areas.</p>
      </div>
      <div className={classes.another}>
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={index} className={classes.imagediv}>
                <div className={classes.position}>
                  <img
                    src={URL.createObjectURL(image.file)}
                    alt="pics"
                    className={classes.image}
                  />
                  <div
                    className={classes.delete}
                    alt="delete"
                    onClick={() => deleteImage(index)}
                  >
                    <RiDeleteBin6Fill />
                  </div>
                </div>
                <select className={classes.select} onChange={(event) => handleSelect(event, index)}>
                  <option value="">Description</option>
                  <option value="Kitchen"> Kitchen</option>
                  <option value="Bathroom">Bathroom</option>
                  <option value="Toilet">Toilet</option>
                  <option value="Bedroom">Bedroom</option>
                </select>
              </div>
            );
          })}
        {selectedImages.length < 6 && (
          <div className={classes.add}>
            <label className={classes.add1}>
              <div className={classes.img}>
                <h1>+</h1>
              </div>
              <h3>Add Photos</h3>
              <p> {selectedImages.length} photos of 6 required</p>
              <input
                type="file"
                name="images"
                onChange={handleUpload}
                multiple
                accept="image/png , image/jpeg"
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
