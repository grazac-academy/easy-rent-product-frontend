import Location from '../../assets/location.svg';
import Property from '../../assets/property.svg';
import Price from '../../assets/price.svg';
import Bedroom from '../../assets/bedroom.svg';
import classes from './search.module.css';
import Dropdown from '../Dropdown/Dropdown';

import { bedrooms, locations, prices, propertyTypes } from '../../Constants/index';

const Search = () => {
  return (
    <div className={classes.search}>
      <div>
        <div className={classes.rent}>
          <p>Rent</p>
        </div>
        <div className={classes.detail}>
          <div className={classes.innerdetail}>
            <div className={classes.inner_detail}>
              <Dropdown
                options={locations}
                placeholder={'State'}
                src={Location}
                title="Location"
              />
              <Dropdown
                options={propertyTypes}
                placeholder={'Choose Type'}
                title="Property Type"
                src={Property}
              />
              <Dropdown 
              options={prices}
              src={Price} 
              placeholder={'Choose range'}
              title="Price Range" 
              />
              <Dropdown 
              options={bedrooms}
              src={Bedroom} 
              placeholder={'Choose number'}
              title="Bedroom" />
            </div>
            <div className={classes.advanced}>
              <p>hhjkjkllkjhjdkjkjskjksjkhfjehfjwejfkjwkjdkjwhadkjhwasjdhjhwsdj</p>
            </div>
          </div>
            <div className={classes.btn}>
              <button className={classes.search_button}>Search</button>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
