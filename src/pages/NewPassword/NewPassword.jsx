import React from 'react';
import FormGroup from 'components/FormGroup/FormGroup';
import { useState, useEffect } from 'react';
import Button2 from 'components/Button/Button2';
import Button from 'components/Button/Button';
import styles from './NewPassword.module.css';
import Modal from 'components/Modal/Modal';
import { Link } from 'react-router-dom';
import { newPasswordData } from 'constant/authData';

const NewPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [newPasswordForm, setNewPasswordForm] = useState(newPasswordData);
  
  const onChange = (e, index) => {
    const updatedArr = newPasswordForm.map((item, i) => {
      console.log(item);
      console.log(index);
      if (i === index) {
        item.value = e.target.value;
      }
      return item;
    });
    setNewPasswordForm(updatedArr);
  };

  useEffect(() => {
     const updatedArr = newPasswordData.map((item, i) => {
       if (i === 1) item.pattern = newPasswordForm[0].value;
       return item;
     });
     setNewPasswordForm(updatedArr);
   });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newPasswordForm);
   setShowModal(true);
  };
  // const close = () => { setShowModal(false)}
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Input New Password</h1>
        <p className={styles.p1}>
          You are a step closer, input a new password below
        </p>
        {newPasswordData.map((input, index) => (
          <FormGroup
            key={input.id}
            {...input}
            newPasswordForm={newPasswordForm[input.name]}
            onChange={(e) => onChange(e, index)}
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