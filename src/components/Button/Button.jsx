import React from 'react'
import styles from './Button.module.css'

function Button({disabled, text}) {
  return (
    <div className={styles.btnDiv}>
          <button disabled={disabled} className={styles.btn}>{text}</button>
    </div>
  );
}

export default Button