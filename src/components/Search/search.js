import { useState } from 'react';
import AdvancedSearch from 'components/AdvancedSearch/AdvancedSearch';
import Location from 'assets/location.svg';
import Property from 'assets/property.svg';
import Price from 'assets/price.svg';
import Bedroom from 'assets/bedroom.svg';
import classes from './search.module.css';
import Dropdown from 'components/Dropdown/Dropdown';
import Button from 'components/Btn/Btn';
import { bedrooms, locations, prices, propertyTypes } from 'constant';
import Icon from '../../icons';

const Search = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={classes.search}>
        <div className={classes.inner_search} data-aos="flip-right" data-aos-duration='800' data-aos-mirror='true'>
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

                <span className={classes.dropdown_span}></span>

                <Dropdown
                  options={propertyTypes}
                  placeholder={'Choose Type'}
                  className={classes.dropdown}
                  title="Property Type"
                  src={Property}
                />

                <span className={classes.dropdown_span}></span>

                <Dropdown
                  options={prices}
                  src={Price}
                  placeholder={'Choose range'}
                  title="Price Range"
                />

                <span className={classes.dropdown_span}></span>

                <Dropdown
                  options={bedrooms}
                  src={Bedroom}
                  placeholder={'Choose number'}
                  title="Bedroom"
                />

                <span className={classes.dropdown_span}></span>
              </div>
              <button className={classes.button} onClick={() => setShow(true)}>
                <span>More search options</span>
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
