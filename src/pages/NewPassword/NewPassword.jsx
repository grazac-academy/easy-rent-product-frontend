import React from 'react';
import FormGroup from './../../components/FormGroup/FormGroup';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import styles from './NewPassword.module.css';

const NewPassword = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (evt, type) => {
    setLoginForm({
      ...loginForm,
      [type]: evt.target.value,
    });
  };
  return (
    <form className={styles.form}>
      <h1 className={styles.title}>Input New Password</h1>
      <p className={styles.p1}>
        You are a step closer, input a new password below
      </p>
      <FormGroup
        label="New Password"
        type="password"
        placeholder="at least 8 characters"
        name="new password"
        onChange={(event) => changeHandler(event, 'password')}
        required={true}
        minLength={8}
        maxLength={20}
      />
      <FormGroup
        label="Confirm Password"
        type="password"
        placeholder="confirm password"
        name="confirm password"
        onChange={(event) => changeHandler(event, 'password')}
        required={true}
        minLength={8}
        maxLength={20}
      />
      <Button text="Enter" />
    </form>
  );
}
export default NewPassword;