import React from 'react';
import styles from './PostHouse.module.css';
import PostHouseSteps from './PostHouseSteps';
import Button from 'components/Button/Button';

function PostHouse() {
  return (
    <div className={styles.post_house}>
      <h1> Post a House</h1>
      <p>Post a picture of your house to connect with a tenant</p>
      <PostHouseSteps />
      <Button>Post a House</Button>
    </div>
  );
}

export default PostHouse;
