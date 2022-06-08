import React from 'react';
import classes from './Property.module.css';
import BigImage from 'assets/big_img.svg';
import Image1 from 'assets/img1.svg';
import Image2 from 'assets/img2.svg';
import Image3 from 'assets/img3.svg';
import Image4 from 'assets/img4.svg';
import Image5 from 'assets/img5.svg';
import Image6 from 'assets/img5.svg';
import bathroom from 'assets/Vector (1).svg';
import garage from 'assets/Vector (2).svg';
import bedroom from 'assets/Vector(3).svg';
import location from 'assets/location.svg';
import Card from 'components/contactCard/card';
import ApartmentCard from 'components/ApartmentCard/ApartmentCard';
// import Array from 'constant/Array';
import apartments from 'constant';
import {useEffect} from 'react';

const Property = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const array = [
  //   {id: 1,image: Image1},
  //   {id: 2, image: Image2},
  //   {id: 3, image: Image3},
  //   {id: 4,image: Image4},
  //   {id: 5, image: Image5},
  //   {id: 6, image: Image6},
  // ]

  return (
    <div className={classes.main}>
      <div className={classes.innerContainer}>
        <div className={classes.upperText}>
          <p>Home/Properties/3 BEDROOM FLAT</p>
          <h3>3 Bedroom flat</h3>
        </div>
        <div className={classes.details}>
          <div className={classes.location}>
            <img src={location} alt="image" />
            <p>Adigbe, Abeokuta</p>
          </div>
          <div className={classes.amount}>
            <h3>
              N10,000/<span>mo</span>
            </h3>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <div className={classes.images1}>
            <img src={BigImage} alt="image" />
          </div>

          <div className={classes.gridimg}>
            {/* {
          array.map((item)=>(
            <div className={classes.images} onClick={()=>handleSelect(item.id)} key={item.id} item={item}>
            <img src={item.image} alt="image" />
          </div>
          ))} */}

            <div className={classes.images}>
              <img src={Image1} alt="image" />
            </div>
            <div className={classes.images}>
              <img src={Image2} alt="image" />
            </div>
            <div className={classes.images}>
              <img src={Image3} alt="image" />
            </div>
            <div className={classes.images}>
              <img src={Image4} alt="image" />
            </div>
            <div className={classes.images}>
              <img src={Image5} alt="image" />
            </div>
            <div className={classes.images}>
              <img src={Image5} alt="image" />
            </div>
          </div>
        </div>
        <div className={classes.section2}>
          <div className={classes.sect}>
            <div className={classes.bedrooms}>
              <div className={classes.bed3}>
                <div className={classes.bedImg}>
                  <img src={bedroom} alt="bed" />
                </div>
                <p>3 Bedroom</p>
              </div>
              <div className={classes.bed3}>
                <div className={classes.bedImg}>
                  <img src={bathroom} alt="bed" />
                </div>
                <p>3 Bathroom</p>
              </div>
              <div className={classes.bed3}>
                <div className={classes.bedImg}>
                  <img src={garage} alt="bed" />
                </div>
                <p>1 Garage</p>
              </div>
            </div>
            <div className={classes.description}>
              <h2>Description</h2>
              <p>
                This 3 Bedroom flat building builtifully built on a plot of land
                in a lovely secured environment of Adigbe, Abeokuta. It consists
                of 3 Bedrooms, 3 Bathrooms and 1 Garage.
              </p>
            </div>
            <div>
              <ul className={classes.houseFeatures}>
                <h2>House Features</h2>
                <li>Spacious Lounge with Wooden Tiles</li>
                <li>P.O.P Ceiling</li>

                <li>Aluminium Casement Window with Metal</li>
                <li>Grills</li>
                <li>Open Dining Area</li>
                <li>A bar</li>
                <li>Chandelier Lightning</li>
                <li>All Room En-suits with Full Bath</li>
                <li>Spacious Lounge</li>
                <li>Fully Furnished Kitchen with Store</li>
                <li>Inbuilt Wardrobe</li>
                <li>Ample Parking Space</li>
                <li>Car Port</li>
                <li>Power House</li>
                <li>Electric Fence</li>
                <li>Paved Stones</li>
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
