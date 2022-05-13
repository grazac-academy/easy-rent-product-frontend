import React from 'react';
import { Link } from 'react-router-dom';
import FormGroup from './../../components/FormGroup/FormGroup';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import styles from './Login.module.css';
import Google from 'components/Button/Google';
// import axios from 'axios';

const Login = (props) => {
  const [type, setType] = useState(true);
   const [loading, setLoading] = useState(false);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&/.*])[a-zA-Z0-9!@#$%^&/.*]{8,20}$`,
      required: true,
    },
  ];
const onChange = (e) => {
  setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(loginForm);
};

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Login</h1>
      <p className={styles.p1}>
        Kindly fill in the details below to log into your account
      </p>
      {inputs.map((input) => (
        <FormGroup
          key={input.id}
          {...input}
          loginForm={loginForm[input.name]}
          onChange={onChange}
        />
      ))}
    
      <div className={styles.checkboxDiv}>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="password"
            onChange={() => setType(!type)}
          />
          <label for="password"> Show password</label>
        </div>
        <Link to="/resetpassword">
          <p>Forgot password?</p>
        </Link>
      </div>
      <Button text={loading ? 'Loading' : 'Login'} />
      <Google />
    </form>
  );
};
export default Login;
