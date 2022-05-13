import React from 'react';
import FormGroup from 'components/FormGroup/FormGroup';
import Button from 'components/Button/Button';
import styles from './ResetPassword.module.css';

export default function ResetPassword() {
  return (
    <form className={styles.form}>
      <h1 className={styles.title}>Input New Password</h1>
      <p className={styles.p1}>
        You are a step closer, input a new password below
      </p>
      <FormGroup
        label="Your Email"
        type="text"
        placeholder="forexample@gmail.com"
        name="email"
        // onChange={(event) => changeHandler(event, 'email')}
        required={true}
      />
      <Button text="Reset" />
    </form>
  );
}
