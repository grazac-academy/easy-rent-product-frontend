import { useState } from 'react';
import AdvancedSearch from 'components/AdvancedSearch/AdvancedSearch';
import Location from 'assets/location.svg';
import Property from 'assets/property.svg';
import Price from 'assets/price.svg';
import Bedroom from 'assets/bedroom.svg';
import classes from './search.module.css';
import Dropdown from 'components/Dropdown/Dropdown';
import Button from 'components/Btn/Btn';
import {
  bedrooms,
  locations,
  prices,
  propertyTypes,
} from '../../constants/index';
import Icon from '../../icons';

const Search = () => {
  const [show, setShow] = useState(false);
  return (
    <>
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
                  title="Bedroom"
                />
              </div>
              <button className={classes.button} onClick={() => setShow(true)}>
                <span>Advanced Search</span>
                <Icon type="dropdown" />
              </button>
            </div>
            <Button>Search</Button>
          </div>
        </div>
      </div>
      {show && <AdvancedSearch close={() => setShow(false)} />}
    </>
  );
};
export default Search;
