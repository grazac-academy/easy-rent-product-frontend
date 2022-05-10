import classes from './How.module.css';
import search from 'assets/House-searching.svg';
import post from 'assets/Smart-home.svg';
import connect from 'assets/Texting-bro.svg';

const How = () => {
  return (
    <div className={classes.main}>
      <div className={classes.inner}>
        <div className={classes.upper}>
          <h2>How it Works</h2>
          <p>Browse through our array of properties available</p>
        </div>

        <div className={classes.blocks}>
          <div className={classes.card}>
            <div className={classes.image2}>
              <img src={search} alt="" />
            </div>
            <div className={classes.text}>
              <h2>Search</h2>
              <p>
                Search through our list of properties for rent shared by other
                people{' '}
              </p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.image2}>
              <img src={post} alt="" />
            </div>
            <div className={classes.text}>
              <h2>Post</h2>
              <p>
                Snap and share photos of your properties available for rent and
                lease
              </p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.image}>
              <img src={connect} alt="" />
            </div>
            <div className={classes.text1}>
              <h2>Connect</h2>
              <p>
                Connect with preferred house owner and make an offer offline
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
