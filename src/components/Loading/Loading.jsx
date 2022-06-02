import React from 'react'
import styles from './Loading.module.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loading = () => {
  return (
    <span className={styles.loader}>
      <AiOutlineLoading3Quarters />
    </span>
  );
}

export default Loading