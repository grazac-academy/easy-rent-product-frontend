import classes from "./Property.module.css";
import bathroom from "assets/Vector (1).svg";
import garage from "assets/Vector (2).svg";
import bedroom from "assets/Vector(3).svg";
import location from "assets/location.svg";
import Card from "components/contactCard/card";
import ApartmentCard from "components/ApartmentCard/ApartmentCard";
import { useState } from "react";
import apartments from "constant/index";
import data from "constant/Data";
import {useEffect} from "react";




const Property = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [img, setImg] = useState(data.images[0]);

  const handleImg = (index) => {
    setImg(data.images[index]);
  };

  return (
    <div>
      <div className={classes.innerContainer}>
        <div className={classes.upperText}>
          <p>Home/Properties/ BEDROOM FLAT</p>
          <h3> Bedroom flat</h3>
        </div>
        <div className={classes.details}>
          <div className={classes.location}>
            <img src={location} alt="image" />
            <p>{data.Location}</p>
          </div>
          <div className={classes.amount}>
            <h3>
              {data.Price}/<span>mo</span>
            </h3>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <div className={classes.images}>
            <img src={img} alt="image" />
          </div>
          <div className={classes.gridimg}>
            {data.images.map((item, index) => (
              <div
                key={index}
                className={classes.images1}
                onClick={() => handleImg(index)}
              >
                <img src={item} alt="img" />
              </div>
            ))}
          </div>
        </div>
        <div className={classes.section2}>
          <div className={classes.sect}>
            <div className={classes.bedrooms}>
              <div className={classes.bed3}>
                <div className={classes.bedImg}>
                  <img src={bedroom} alt="bed" />
                </div>
                <p>{data.BedroomNumber} Bedroom</p>
              </div>
              <div className={classes.bed3}>
                <div className={classes.bedImg}>
                  <img src={bathroom} alt="bed" />
                </div>
                <p>{data.BathroomNumber} Bathroom</p>
              </div>
              <div className={classes.bed3}>
                <div className={classes.bedImg}>
                  <img src={garage} alt="bed" />
                </div>
                <p>{data.GarageNumber} Garage</p>
              </div>
            </div>
            <div className={classes.description}>
              <h2>Description</h2>
              <p>{data.Description}</p>
            </div>
            <div>
              <ul className={classes.houseFeatures}>
                <h2>House Features</h2>
                {data.Amenities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={classes.card}>
            <Card />
          </div>
        </div>
        <div className={classes.similarProperties}>
          <div className={classes.similar}>
            <h3>Similar Properties</h3>
          </div>
          <div className={classes.array}>
            {apartments.slice(0, 2).map((item) => (
              <ApartmentCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
