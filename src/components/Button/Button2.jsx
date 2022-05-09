import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Button.module.css';
import backarrow from '../../Assets/backarrow.png';

const Button2 = ({ children }) => {
    return (
    <Link to='/'>
        <div className={styles.btn2Div}>
        <button className={styles.btn2}>
            <div className={styles.backhome}>
            <div className={styles.backarrow}>
                <img src={backarrow} alt="Home" />
            </div>
            <span>Back to Home</span>
            </div>
        </button>
        </div>  
    </Link>
  );
}

export default Button2;
