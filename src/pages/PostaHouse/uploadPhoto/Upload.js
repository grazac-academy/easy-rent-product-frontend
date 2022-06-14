import React, { useState } from "react";
import classes from "./Upload.module.css";

const Upload = () => {
// const [selectedImages, setSelectedImages] = useState[{}];
const onSelectFile = (event) => {
  const selectedFiles = event.target.files; 
  const selectedFilesArray = Array.from(selectedFiles);

  const imagesArray = selectedFilesArray.map((file) => {
    return URL.createObjectURL(file)
  });

// setSelectedImages(imagesArray);

};

  return (
    <div className={classes.main}>
      <div className={classes.UploadText}>
        <h1>Add at least 5 photos of house area:</h1>
        <p>Kitchen, bathroom, toilet, bedroom, living room and other areas.</p>
      </div>
      <div className={classes.another}>
        <div className={classes.add}>
          <label className={classes.add1}>
            <div className={classes.img}>
              <h1>+</h1>
            </div>
            <h3>Add Photos</h3>
            <p> 0 photos of 6 required</p>
            <input 
            type='file' 
            name='images' 
            onChange={onSelectFile} 
            multiple accept='image/png , image/jpeg'
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Upload;
