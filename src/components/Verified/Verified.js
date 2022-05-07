import Web from 'assets/web.svg';
import Landlord from 'assets/landlord.svg';
import House from 'assets/house.svg';
import classes from './Verified.module.css';

const Verified = () => {
  return (
    <div className={classes.verified}>
      <div className={classes.verified_inner}>
        <div className={classes.web}>
          <div>
            <img src={Web} alt="web" />
          </div>
          <div>
            <p className={classes.price}>+120,000</p>
            <p className={classes.details}>fully-online rentals</p>
          </div>
        </div>
        <div className={classes.web}>
          <div>
            <img src={Landlord} alt="landlord" />
          </div>
          <div>
            <p className={classes.price}>+13,000</p>
            <p className={classes.details}>Active Landlords</p>
          </div>
        </div>
        <div className={classes.web}>
          <div>
            <img src={House} alt="house" />
          </div>
          <div>
            <p className={classes.price}>+110,000</p>
            <p className={classes.details}>Verified Homes</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Verified;
