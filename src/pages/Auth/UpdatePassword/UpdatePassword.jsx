import React from 'react';
import styles from './UpdatePassword.module.css'
import { useState, useEffect } from 'react';
import FormGroup from 'components/FormGroup/FormGroup';
import { updatePasswordData } from 'constant/authData';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import Loading from 'components/Loading/Loading';
import { Link } from 'react-router-dom'
import { updatePassword } from 'services/auth';
import { toast } from 'react-toastify';


const UpdatePassword = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [updatePasswordForm, setUpdatePasswordForm] = useState(updatePasswordData);
    
     const close = () => {
       setShowModal(false);
    };
    const onChange = (e, index) => {
        const updatedArr = updatePasswordForm.map((item, i) => {
            if (i === index) {
                item.value = e.target.value;
            }
            return item;
        });
        setUpdatePasswordForm(updatedArr);
    };
    useEffect(() => {
        const updatedArr = updatePasswordData.map((item, i) => {
            if (i === 2) item.pattern = updatePasswordForm[1].value;
            return item;
        });
        setUpdatePasswordForm(updatedArr);
    }, [updatePasswordForm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {};
        updatePasswordForm.map((input) => (data[input.name] = input.value));
        try {
            setLoading(true);
            const response = updatePassword(data);
            setLoading(false);
            setShowModal(true);
        } catch (error) {
            toast.error(error.response.data.message);

        }
    };


  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Update Password</h1>
        <p className={styles.p1}>
          Kindly update yor password below
        </p>
        {updatePasswordData.map((input, index) => (
          <FormGroup
            key={input.id}
            {...input}
            updatePasswordForm={updatePasswordForm[input.name]}
            onChange={(e) => onChange(e, index)}
          />
        ))}
        <Button>{loading ? <Loading /> : 'Update'}</Button>
      </form>
      {showModal && (
        <Modal>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h1>Your password has been updated. Press OK to Log in</h1>
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

export default UpdatePassword;
