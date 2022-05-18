import React from 'react';
import {useState } from 'react';
import FormGroup from 'components/FormGroup/FormGroup';
import Button from 'components/Button/Button';
import styles from './ResetPassword.module.css';
import Modal from 'components/Modal/Modal';
import openemail from 'assets/open_email.png';
import Close from 'assets/close.png';
import { resetPasswordData } from 'constant/authData';

const ResetPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [resetPasswordForm, setResetPasswordForm] = useState(resetPasswordData);
  

  const onChange = (e) => {
   setResetPasswordForm({ ...resetPasswordForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(resetPasswordForm);
    setShowModal(true);
  };
  const close = () => {
    setShowModal(false);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Reset Password</h1>
        <p className={styles.p1}>
          It’s okay to forget, let’s help you recover your password
        </p>
        {resetPasswordData.map((input) => (
          <FormGroup
            key={input.id}
            {...input}
            resetPasswordForm={resetPasswordForm[input.name]}
            onChange={onChange}
          />
        ))}
        <Button text="Reset" />
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
}
export default ResetPassword;
