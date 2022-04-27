import Location from '../../assets/location.svg';
import Property from '../../assets/property.svg';
import Price from '../../assets/price.svg';
import Bedroom from '../../assets/bedroom.svg';
import classes from './search.module.css';
import Dropdown from '../Dropdown/Dropdown';

import { locations, propertyTypes } from '../../constants/index';

const Search = () => {
  return (
    <div>
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
              <Dropdown src={Price} title="Price Range" />
              <Dropdown src={Bedroom} title="Bedroom" />
            </div>
            <div>
              <input placeholder="Advanced search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
