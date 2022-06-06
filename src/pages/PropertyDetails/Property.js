import classes from './Property.module.css';
import Array from 'constant/Array';
import BigImage from 'assets/big_img.svg';
import Image1 from 'assets/img1.svg';
import Image2 from 'assets/img2.svg';
import Image3 from 'assets/img3.svg';
import Image4 from 'assets/img4.svg';
import Image5 from 'assets/img5.svg';
import bathroom from 'assets/Vector (1).svg';
import garage from 'assets/Vector (2).svg';
import bedroom from 'assets/Vector(3).svg';
import location from 'assets/location.svg';
import Card from 'components/contactCard/card';
import ApartmentCard from 'components/ApartmentCard/ApartmentCard';
// import Data from "constant/houseDeatailsData";
// import classes from "./Rooms";
import { useState } from 'react';

const data = {
  id: 1,
  images: [BigImage, Image1, Image2, Image3, Image4, Image5],

  Location: 'Adigbe, Abeokuta',
  Price: '10,000',
  PropertyType: 'Mini Flat',
  BedroomNumber: 3,
  BathroomNumber: 3,
  garage: 1,
  Description:
    'This 3 Bedroom flat building builtifully built on a plot of land in a lovely secured environment of Adigbe, Abeokuta. It consist of 3 Bedrooms, 3 Bathrooms and 1 Garage.',
  Amenities: [
    'Spacious Lounge with Wooden Tiles P.O.P Ceiling',
    'Aluminium Casement Window with Metal',
    'Grills',
    'Open Dining Area',
    'A bar',
    'Chandelier Lightning',
    'All Room En-suits with Full Bath',
    'Spacious Lounge',
    'Fully Furnished Kitchen with Store',
    'Inbuilt Wardrobe',
    'Ample Parking Space',
    'Car Port',
    'Power House',
    'Electric Fence',
    'Paved Stones',
  ],
  index: 0,
};

const Property = () => {
  const [img, setImg] = useState(data.images[0]);

  // create state to hold the main image
  // create a function that will be used to update the setImg function
  // create an onClick handler in imgs
  // pass an index tro fucntion
  //

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
          <div className={classes.images1}>
            <img src={img} alt="image" />
          </div>
          <div className={classes.gridimg}>
            {data.images.map((item, index) => (
              <div key={index} className={classes.images1}>
                <img src={item} alt="image" />
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
                {data.Amenities}
              </ul>
            </div>
          </div>
          <Card />
        </div>
        <div className={classes.similarProperties}>
          <div className={classes.similar}>
            <h3>Similar Properties</h3>
          </div>
          <div className={classes.array}>
            {Array.slice(0, 2).map((item) => (
              <ApartmentCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
