import React from 'react'
import styles from './Button.module.css'

function Button(props) {
  return (
    <div className={styles.btnDiv}>
          <button className={styles.btn}>{props.text}</button>
    </div>
  );
}

export default Button