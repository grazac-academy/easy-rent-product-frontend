// import Dropdown from 'components/Dropdown/Dropdown';
import classes from './Propertylisting.module.css';
import Bedroom from 'assets/bedroom.svg';
import Bathroom from 'assets/Bathroom.svg';
import Tag from 'assets/tag.svg';
import Property from 'assets/property.svg';
import Button from 'components/Btn/Btn';
import { Bedrooms } from '../../constant/index';
import { Bathrooms } from '../../constant/index';

const propertyListing = (props) => {
  return (
    <div className={classes.propertylist}>
      <div className={classes.inputs}>
        <img src={Property} />
        <input
          type="text"
          className={classes.input_email}
          placeholder="Enter an address,neighborhood or city"
        />
      </div>
      <div className={classes.amenities}>
        <img src={Bedroom} alt='bedroom' />
        <select>
          {Bedrooms.map((item) => (
            <option>{item.label}</option>
          ))}
        </select>
      </div>
      <div className={classes.amenities}>
        <img src={Bathroom} alt='bathroom' />
        <select>
        {Bathrooms.map((item) => (
          <option>{item.label}</option>
        ))}
        </select>
      </div>
      <div className={classes.amenities}>
        <img src={Tag} />
        <input
          type="text"
          className={classes.input_email}
          placeholder="₦0 - ₦850,000"
        />
      </div>
      <Button btnType="btn_search">Search</Button>
    </div>
  );
};
export default propertyListing;
