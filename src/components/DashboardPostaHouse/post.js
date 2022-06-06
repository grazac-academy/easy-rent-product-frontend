import React from "react";
import classes from "./post.module.css";
import Array from "constant/Array";
import Add from "asset/add.svg";
import Home1 from "asset/Home1.svg";
import Home2 from "asset/Home2.svg";
import Home3 from "asset/Home3.svg";

const postaHouse = () => {
  return (
    <div className={classes.main}>
      <div className={classes.upperContainer}>
        <div>
          <h3>Welcome, Chris</h3>
          <p>This is your property portfolio report</p>
        </div>
        <div>
          <img src={Add} alt="add" />
          <p>Post a house</p>
        </div>
        <div className={classes.properties}>
          <img scr={Home1} alt="home1" />
          <div>
            <h1>16</h1>
            <p>All properties</p>
          </div>
        </div>
        <div className={classes.properties}>
          <img scr={Home2} alt="home1" />
          <div>
            <h1>16</h1>
            <p>All properties</p>
          </div>
        </div>
        <div className={classes.properties}>
          <img scr={Home3} alt="home1" />
          <div>
            <h1>16</h1>
            <p>All properties</p>
          </div>
        </div>
      </div>
      <div className={classes.downContainer}>
        <div className={classes.apartmentHeading}>
          <div>
            <h1>My Properties</h1>
            <p>This is your property portfolio report</p>
          </div>
          <p>view all</p>
        </div>
        <div className={classes.apartment}>
          {Array.slice(0, 4).map((item) => (
            <ApartmentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default postaHouse;
