import React from 'react';
import FormGroup from 'components/FormGroup/FormGroup';
import { useState, useEffect } from 'react';
import Button from 'components/Button/Button';
import styles from './NewPassword.module.css';
import Modal from 'components/Modal/Modal';
import { Link } from 'react-router-dom';
import { newPasswordData } from 'constant/authData';
import Loading from 'components/Loading/Loading';

const NewPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [newPasswordForm, setNewPasswordForm] = useState(newPasswordData);
  const [loading, setLoading] = useState(false);

  const onChange = (e, index) => {
    const updatedArr = newPasswordForm.map((item, i) => {
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
  }, [newPasswordForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    newPasswordForm.map((input) => (data[input.name] = input.value));
    // try {
    //   setLoading(true);
    //   const response = newPassword(data);
    //   console.log(response);
    //   setLoading(false);
    //   setShowModal(true);
    // } catch (error) {
    //   console.log(error.response.data.message);
    //   toast.error(error.response.data.message);
    //   console.log(error);
    // }
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
        <Button>{loading ? <Loading /> : 'Enter'}</Button>
      </form>
      {showModal && (
        <Modal>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h1>Your new password has been saved. Return to Log in page</h1>
              <Link to={'/login'}>
                <Button>OK</Button>
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
export default NewPassword;
