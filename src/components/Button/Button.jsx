import React from 'react'
import styles from './Button.module.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Button({disabled, children, loading}) {
  return (
    <div className={styles.btnDiv}>
      <button disabled={disabled} className={styles.btn}>
        {children}{' '}
        {loading ? (
          <span className={styles.loader}>
            <AiOutlineLoading3Quarters />
          </span>
        ) : (
          ''
        )}
      </button>
    </div>
  );
}

export default Button