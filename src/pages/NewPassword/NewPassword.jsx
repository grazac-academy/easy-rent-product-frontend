import React from 'react';
import FormGroup from 'components/FormGroup/FormGroup';
import { useState } from 'react';
import Button2 from 'components/Button/Button2';
import Button from 'components/Button/Button';
import styles from './NewPassword.module.css';
import Modal from 'components/Modal/Modal';
import { Link } from 'react-router-dom';

const NewPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [newPasswordForm, setNewPasswordForm] = useState({
    email: ''
  });
  const inputs = [
    {
      id: 1,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&/.*])[a-zA-Z0-9!@#$%^&/.*]{8,20}$`,
      required: true,
    },
    {
      id: 2,
      name: 'confirm password',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Confirm Password',
      pattern: newPasswordForm.password,
      required: true,
    },
  ];
 
  const onChange = (e) => {
    setNewPasswordForm({
      ...newPasswordForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newPasswordForm);
   setShowModal(true);
  };
  // const close = () => { setShowModal(false)}
  return (
    <>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <h1 className={styles.title}>Input New Password</h1>
        <p className={styles.p1}>
          You are a step closer, input a new password below
        </p>
        {inputs.map((input) => (
          <FormGroup
            key={input.id}
            {...input}
            newPasswordForm={newPasswordForm[input.name]}
            onChange={onChange}
          />
        ))}
        <Button text="Enter" />
      </form>
        {showModal && (
          <Modal>
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <h1>Your new password has been saved. Return to Log in page</h1>
                <Link to={'/login'}>
                  <Button text="OK" />
                </Link>
              </div>
            </div>
          </Modal>
        )}
    </>
  );
}
export default NewPassword;