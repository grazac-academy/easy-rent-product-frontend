import React from 'react';
import { useState, useEffect } from 'react';
import FormGroup from 'components/Formgroup/FormGroup';
import styles from './SignUp.module.css';
import Button from 'components/Button/Button';
import Google from 'components/Button/Google';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'components/Modal/Modal';
import openemail from 'assets/open_email.png';
import Close from 'assets/close.png';
import { registerData } from 'constant/authData';
import { registerUser } from 'services/auth';

const SignUp = (props) => {
  const [type, setType] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [signupForm, setSignupForm] = useState(registerData);

  useEffect(() => {
    const updatedArr = signupForm.map((item, i) => {
      if (i === 4) {
        if (type) item.type = 'text';
        else item.type = 'password';
      }
      return item;
    });
    setSignupForm(updatedArr);
  }, [type]);

  const onChange = (e, index) => {
    const updatedArr = signupForm.map((item, i) => {
      console.log(item);
      console.log(index);
      if (i === index) {
        item.value = e.target.value;
      }
      return item;
    });
    setSignupForm(updatedArr);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupForm);
    const data = {};
    signupForm.map((input) => (data[input.name] = input.value));
    console.log(data);
    try {
      setLoading(true);
      const response = await registerUser(data);
      console.log(response);
      
      
    } catch (error) {
      setLoading(false);
      console.log(error);
      setShowModal(true);
    }
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
        {registerData.map((input, index) => (
          <FormGroup
            key={input.id}
            {...input}
            signupForm={signupForm[input.name]}
            onChange={(e) => onChange(e, index)}
          />
        ))}
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="password"
            onChange={() => setType(!type)}
          />
          <label htmlFor="password"> Show password</label>
        </div>

        <p className={styles.p2}>
          By signing up, you’re agreeing to our
          <span className={styles.rent}> Terms & Conditions</span> and
          <span className={styles.rent}> Privacy Policy</span>
        </p>
        <Button text={loading ? 'Loading' : 'Create Account'} disabled={loading}/>

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
              <button onClick={close}>
                <img src={Close} alt="close" />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
export default SignUp;
