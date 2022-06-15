import React from "react";
import { useState } from "react";
import classes from "./card.module.css";
import tel from "../../assets/tel.svg";
import safety from "../../assets/safety.svg";
import Kunle from "assets/testimonial/Kunle.webp";

const Card = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className={classes.main}>
      <div className={classes.innerContainer}>
        <div className={classes.agentDetails}>
          <div className={classes.imgContainer}>
            <img src={Kunle} alt="agent" />
          </div>
          <h1>
            Adekunle <span>Awotipe</span>
          </h1>
        </div>
        <button className={classes.agentContact} onClick={handleShow}>
          {show ? (
            <div className={classes.showContact}>
              <img src={tel} alt="tel" />
              <h2>Show Contact</h2>
            </div>
          ) : (
            <div className={classes.showContact}>
              <img src={tel} alt="tel" />
              <h2>0904456378</h2>
            </div>
          )}
        </button>
        <div className={classes.safetyTips}>
          <div className={classes.safety}>
            <div className={classes.safetyFlex}>
              <img src={safety} alt="safety" />
              <p>Safety Tips</p>
            </div>
            <ul>
              <li>1. Try to meet at a safe location</li>
              <li>2. Make sure you INSPECT before payment </li>
              <li>3. Make payment only when you are satisfied </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
