import React, { useState } from 'react';
import classes from './Upload.module.css';
import Delete from 'assets/delete.svg';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const Upload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  return (
    <div className={classes.main}>
      <div className={classes.UploadText}>
        <h1>Add at least 5 photos of house area:</h1>
        <p>Kitchen, bathroom, toilet, bedroom, living room and other areas.</p>
      </div>
      <div className={classes.another}>
        {selectedImages &&
          selectedImages.map((image) => {
            return (
              <div key={image} className={classes.imagediv}>
                <div className={classes.position}>
                  <img src={image} alt="pics" className={classes.image} />
                  <div
                    className={classes.delete}
                    alt="delete"
                    onClick={() =>
                      setSelectedImages(
                        selectedImages.filter((e) => e !== image)
                      )
                    }
                  >
                    <RiDeleteBin6Fill />
                  </div>
                </div>
                <select>
                  <option>Description</option>
                  <option>Kitchen</option>
                  <option>Bathroom</option>
                  <option>Toilet</option>
                  <option>Bedroom</option>
                </select>
              </div>
            );
          })}
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
              onChange={onSelectFile}
              multiple
              accept="image/png , image/jpeg"
            />
          </label>
          {/* (selectedImages.length > 0 &&
          (selectedImages.length > 6 ? (
            <p className={classes.error} >You can't upload more than 6 images!</p>
            <span>please delete <br>(selectedImages.length - 6)</br> of them</span>
          ))
          ) */}
        </div>
      </div>
    </div>
  );
};

export default Upload;
