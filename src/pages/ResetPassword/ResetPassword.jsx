import React from 'react';
import {useState } from 'react';
import FormGroup from './../../components/FormGroup/FormGroup';
import Button from '../../components/Button/Button';
import styles from './ResetPassword.module.css';

const ResetPassword = () => {

const [resetPasswordForm, setResetPasswordForm] = useState({
  newPassword: '',
  confirmPassword: '',
});
  const inputs = [
  {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
];

  const onChange = (e) => {
   setResetPasswordForm({ ...resetPasswordForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(resetPasswordForm);
  };
 

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Reset Password</h1>
      <p className={styles.p1}>
        It’s okay to forget, let’s help you recover your password
      </p>
      {inputs.map((input) => (
        <FormGroup
          key={input.id}
          {...input}
          resetPasswordForm={resetPasswordForm[input.name]}
          onChange={onChange}
        />
      ))}
      <Button text="Reset" />
    </form>
  );
}
export default ResetPassword;
