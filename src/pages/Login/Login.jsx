import React from 'react';
import { Link } from 'react-router-dom';
import FormGroup from 'components/Formgroup/FormGroup';
import { useState, useEffect } from 'react';
import Button from 'components/Button/Button';
import styles from './Login.module.css';
import Google from 'components/Button/Google';
import { loginData } from 'constant/authData';
// import axios from 'axios';

const Login = (props) => {
  const [type, setType] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState(loginData);

  // const onChange = (e) => {
  //   setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  // };

  const onChange = (e, index) => {
    const updatedArr = loginForm.map((item, i) => {
      console.log(item);
      console.log(index);
      if (i === index) {
        item.value = e.target.value;
      }
      return item;
    });
    setLoginForm(updatedArr);
  };

  useEffect(() => {
    const updatedArr = loginData.map((item, i) => {
      if (i === 1) {
        if (type) item.type = 'text';
        else item.type = 'password';
      }
      return item;
    });
    setLoginForm(updatedArr);
  }, [type]);

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
      {loginData.map((input, index) => (
        <FormGroup
          key={input.id}
          {...input}
          loginForm={loginForm[input.name]}
          onChange={(e) => onChange(e, index)}
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
