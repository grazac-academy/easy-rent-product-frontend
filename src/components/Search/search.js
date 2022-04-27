import Location from '../../assets/location.svg'
import Property from '../../assets/property.svg'
import Price from '../../assets/price.svg'
import Bedroom from '../../assets/bedroom.svg'
import {Locations} from '../../Constants/index.js'
import classes from './search.module.css'
import Dropdown from '../Dropdown/Dropdown'

const Search = () =>{
    return(
        <div>
            <div>
              <div className={classes.rent}>
                  <p>Rent</p>
              </div>
              <div className={classes.detail}>
                  <div className={classes.innerdetail}>
                      <div className={classes.inner_detail}>
                            <div className={classes.location}>
                                <label>
                                    <img className={classes.icons}  src={Location} alt= "location" />
                                    Location
                                </label>
                                <Dropdown />
                                {/* <input
                                className={classes.input}
                                id='location'
                                placeholder="State"
                                /> */}
                                <datalist id='locations'>
                                    {Locations.map((item, index) => (
                                    <option value={item} key={index}></option>
                                    ))}
                                </datalist>
                            </div>
                            <div className={classes.location}>
                                <label>
                                    <img className={classes.icons} src={Property} alt= "property" />
                                    Property Type
                                </label>
                                <input 
                                className={classes.input}
                                placeholder="Choose type"
                                />
                                <datalist></datalist>
                            </div>
                            <div className={classes.location}>
                                <label>
                                    <img className={classes.icons} src={Price} alt= "Price" />
                                    Price Range
                                </label>
                                <input 
                                className={classes.input}
                                placeholder="Choose range"
                                />
                            </div>
                            <div>
                                <label>
                                    <img className={classes.icons} src={Bedroom} alt= "Bedroom" />
                                    Bedroom
                                </label>
                                <input 
                                className={classes.input}
                                placeholder="Choose number"
                                />
                            </div>
                        </div>
                        <div>
                            <input 
                            placeholder="Advanced search"
                            />
                        </div>
                  </div>
              </div>
          </div>
        </div>
    )
}
export default Search;