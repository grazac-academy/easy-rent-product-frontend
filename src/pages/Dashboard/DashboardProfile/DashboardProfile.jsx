import React from 'react';
import { useState } from 'react';
import styles from './DashboardProfile.module.css';
import { HiOutlineUserAdd } from 'react-icons/hi';
import FormGroup from 'components/FormGroup/FormGroup';
import { updatePasswordData } from 'constant/authData';
import {updateProfileData } from 'constant/authData';
import Modal from 'components/Modal/Modal';
import Close from 'assets/close.png';
import Button from 'components/Button/Button';
import Loading from 'components/Loading/Loading';
import { updatePassword } from 'services/auth';
import { toast } from 'react-toastify';

const DashboardProfile = () => {
  const [updatePasswordForm, setUpdatePasswordForm] =
    useState(updatePasswordData);
  const [updateProfileForm, setUpdateProfileForm] = useState(updateProfileData);
  
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [uploadPhoto, setUploadPhoto] = useState(false);

  const close = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  const editProfileHandler = () => {
    setEditProfile(!editProfile);
  };
  const uploadHandler = () => {
    setUploadPhoto(!uploadPhoto);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(updatePasswordForm);
    const data = {};
    updatePasswordForm.map((input) => (data[input.name] = input.value));
    console.log(data);
    try {
      setLoading(true);
      const response = await updatePassword(data);
      setLoading(false);
      setShowModal(false);
      toast.success('Update Successful');
      console.log(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className={styles.profileTop}>
        <h1 className={styles.name}>My Profile</h1>
        <div className={styles.profileFlex}>
          <div className={styles.profileContainer}>
            <div className={styles.profileImage}>
              <button className={styles.addImage} onClick={uploadHandler}>
                <HiOutlineUserAdd />
              </button>
            </div>
            <div className={styles.profileInfo}>
              <h2>John Doe</h2>
              <p>JohnDoe45@gmail.com</p>
              <p>+43 673 653 2983</p>
            </div>
          </div>
          <div className={styles.btnDiv}>
            <button className={styles.btn} onClick={editProfileHandler}>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div className={styles.profileTop}>
        <h1 className={styles.name}>My security</h1>
        <div className={styles.profileFlex}>
          <div className={styles.securityContainer}>
            <FormGroup
              label="Email"
              placeholder="temilola15@gmail.com"
              disabled
            />
            <FormGroup label="Password" placeholder="************" disabled />
          </div>
          <div className={styles.btnDiv}>
            <button className={styles.btn} onClick={openModal}>
              Edit Password
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal>
          <form className={styles.modal} onSubmit={handleSubmit}>
            <div className={styles.modalContent}>
              <h1 className={styles.title}>Edit Your Password</h1>
              {updatePasswordData.map((input, index) => (
                <FormGroup
                  key={input.id}
                  {...input}
                  updatePasswordForm={updatePasswordForm[input.name]}
                  onChange={(e) => onChange(e, index)}
                />
              ))}
              <button onClick={close} className={styles.close}>
                <img src={Close} alt="close" />
              </button>
              <Button>{loading ? <Loading /> : 'Update'}</Button>
            </div>
          </form>
        </Modal>
      )}
      {editProfile && (
        <Modal>
          <form className={styles.modal} onSubmit={handleSubmit}>
            <div className={styles.modalContent}>
              <h1 className={styles.title}>Edit Your Profile</h1>
              {updateProfileData.map((input, index) => (
                <FormGroup
                  key={input.id}
                  {...input}
                  updateProfileForm={updateProfileForm[input.name]}
                  onChange={(e) => onChange(e, index)}
                  disabled={input.name === 'email'}
                />
              ))}
              <button onClick={editProfileHandler} className={styles.close}>
                <img src={Close} alt="close" />
              </button>
              <Button>{loading ? <Loading /> : 'Update'}</Button>
            </div>
          </form>
        </Modal>
      )}
      {uploadPhoto && (
        <Modal>
          <form className={styles.modal} onSubmit={handleSubmit}>
            <div className={styles.modalContent}>
              <h1 className={styles.title}>Upload Your Profile Picture</h1>
              <FormGroup placeholder="Drag & drop your file or Browse" type='file' />
              <button onClick={uploadHandler} className={styles.close}>
                <img src={Close} alt="close" />
              </button>
              <Button>{loading ? <Loading /> : 'Upload'}</Button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default DashboardProfile;
