import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './footer.module.css';

const Footer = ({ disabled, button, onClick }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.background}>
      <div className={classes.innerContainer}>
        <p onClick={() => navigate(-1)}> &#60; back</p>
        <button onClick={onClick} disabled={disabled}>
          {button}
        </button>
      </div>
    </div>
  );
};

export default Footer;
