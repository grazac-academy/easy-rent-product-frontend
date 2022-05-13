import React from 'react'
import FormGroup from '../../components/FormGroup/FormGroup'
import styles from './SignUp.module.css'
import Button from '../../components/Button/Button'
import Google from '../../components/Button/Google';
import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <form className={styles.form}>
      <h1 className={styles.title}>
        Hi, Welcome to Easy<span className={styles.rent}>rent</span>
      </h1>
      <p className={styles.p1}>
        Kindly fill in the details below to create your account
      </p>
      <FormGroup
        label="Your Name"
        type="text"
        placeholder="Your full name"
        name="name"
        // onChange={(event) => changeHandler(event, 'name')}
        required={true}
      />
      <FormGroup
        label="Your Email"
        type="text"
        placeholder="forexample@gmail.com"
        name="email"
        // onChange={(event) => changeHandler(event, 'email')}
        required={true}
      />
      <FormGroup
        label="Password"
        type="password"
        placeholder="at least 8 characters"
        name="password"
        // onChange={(event) => changeHandler(event, 'password')}
        required={true}
        minLength={8}
        maxLength={20}
      />
      
        <div className={styles.checkbox}>
            <input type="checkbox" id="password"/>
            <label for="password"> Show password</label>
        </div>
      
      
      <p className={styles.p2}>
        By signing up, you’re agreeing to our
        <span className={styles.rent}> Terms & Conditions</span> and
        <span className={styles.rent}> Privacy Policy</span>
      </p>
      <Button text="Create account"/>
      
      <Google/>
      <p className={styles.p3}>
        Already have an account?
        <Link to='/login'>
        <span className={styles.rent}> Login</span>
        </Link>
      </p>
    </form>
  );
}

