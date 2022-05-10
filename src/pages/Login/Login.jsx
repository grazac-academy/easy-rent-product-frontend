import React from 'react';
import { Link } from 'react-router-dom';
import FormGroup from './../../components/FormGroup/FormGroup';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import styles from './Login.module.css'
import Google from '../../components/Button/Google'

const Login = () => {
  const[type, setType] = useState(true);
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
      <h1 className={styles.title}>Login</h1>
      <p className={styles.p1}>
        Kindly fill in the details below to log into your account
      </p>

      <FormGroup
        label="Email"
        type="text"
        placeholder="forexample@gmail.com"
        name="email"
        onChange={(event) => changeHandler(event, 'email')}
        required={true}
      />
      <FormGroup
        label="Password"
        type={type ? "password" : "text"}
        placeholder="at least 8 characters"
        name="password"
        onChange={(event) => changeHandler(event, 'password')}
        required={true}
        minLength={8}
        maxLength={20}
      />
      <div className={styles.checkboxDiv}>
        <div className={styles.checkbox}>
          <input type="checkbox" id="password"  onChange={()=> setType(!type)}/>
          <label for="password"> Show password</label>
        </div>
        <Link to="/resetpassword" >
          <p>Forgot password?</p>  
         </Link>
      </div>
      <Button text="Login" />
      <Google />
    </form>
  );
}
export default Login;