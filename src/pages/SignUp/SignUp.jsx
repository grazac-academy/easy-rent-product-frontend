import React from 'react';
import { useState } from 'react';
import FormGroup from 'components/FormGroup/FormGroup';
import styles from './SignUp.module.css';
import Button from 'components/Button/Button';
import Google from 'components/Button/Google';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'components/Modal/Modal';
import openemail from 'assets/open_email.png';
import Close from 'assets/close.png';

const SignUp = (props) => {
  const [type, setType] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Your name',
      errorMessage:
        "Your name is required. It can't be empty and must be at least 3 characters long.",
      label: 'Name',
      required: true,
      minLength: { 3: true },
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: `${type ? 'password' : 'text'}`,
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&/.*])[a-zA-Z0-9!@#$%^&/.*]{8,20}$`,
      required: true,
    },
  ];

  const onChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupForm);
    setShowModal(true);
  };
 const close = () => {
   setShowModal(false);
 };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>
          Hi, Welcome to Easy<span className={styles.rent}>rent</span>
        </h1>
        <p className={styles.p1}>
          Kindly fill in the details below to create your account
        </p>
        {inputs.map((input) => (
          <FormGroup
            key={input.id}
            {...input}
            signupForm={signupForm[input.name]}
            onChange={onChange}
          />
        ))}
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="password"
            onChange={() => setType(!type)}
          />
          <label for="password"> Show password</label>
        </div>

        <p className={styles.p2}>
          By signing up, you’re agreeing to our
          <span className={styles.rent}> Terms & Conditions</span> and
          <span className={styles.rent}> Privacy Policy</span>
        </p>
        <Button text={loading ? 'Loading' : 'Create Account'} />

        <Google />
        <p className={styles.p3}>
          Already have an account?
          <Link to="/login">
            <span className={styles.rent}> Login</span>
          </Link>
        </p>
      </form>
      {showModal && (
        <Modal>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalImageDiv}>
                <img src={openemail} alt="openemail" />
              </div>
              <h1>Email verification sent</h1>
              <p>
                A message has been sent to you, kindly check your mail box to
                authenticate your email.
              </p>
              <button onClick={close}><img src={Close} alt="close" /></button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
export default SignUp;
