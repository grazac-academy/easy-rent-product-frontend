import React from 'react';
import { useState } from 'react';
import FormGroup from 'components/FormGroup/FormGroup';
import Button from 'components/Button/Button';
import styles from './ResetPassword.module.css';
import Modal from 'components/Modal/Modal';
import openemail from 'assets/open_email.png';
import Close from 'assets/close.png';
import { resetPasswordData } from 'constant/authData';
import { forgetPassword } from 'services/auth';
import Loading from 'components/Loading/Loading';
import { toast } from 'react-toastify';

const ResetPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [resetPasswordForm, setResetPasswordForm] = useState(resetPasswordData);
  const [loading, setLoading] = useState(false);

  // const onChange = (e) => {
  //   setResetPasswordForm({
  //     ...resetPasswordForm,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const onChange = (e, index) => {
    const updatedArr = resetPasswordForm.map((item, i) => {
      console.log(item);
      console.log(index);
      if (i === index) {
        item.value = e.target.value;
      }
      return item;
    });
    setResetPasswordForm(updatedArr);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(resetPasswordForm);
    const data = {};
    resetPasswordForm.map((input) => (data[input.name] = input.value));
    console.log(data);
    try {
      setLoading(true);
      const response = await forgetPassword(data);
      console.log(response);
      toast.success('Kindly Check your email to verify your account');
      setLoading(false);
      setShowModal(true);

    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
      console.log(error);
    }
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
        {resetPasswordData.map((input, index) => (
          <FormGroup
            key={input.id}
            {...input}
            resetPasswordForm={resetPasswordForm[input.name]}
            onChange={(e) => onChange(e, index)}
          />
        ))}
        <Button>{loading ? <Loading /> : 'Reset'}</Button>
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
export default ResetPassword;
