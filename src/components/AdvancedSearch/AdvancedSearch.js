import { useState } from 'react';
import './AdvancedSearch.css';
import Modal from 'components/Modal/Modal';
// import Icon from '../../icons/index';
import SearchItem from 'components/SearchItem/SearchItem';
import { advancedSearches } from '../../constant/index.js';
import Button from 'components/Btn/Btn';

// const copiedSearch = advancedSearches;
const AdvancedSearch = ({ close, getAmenities }) => {
  const [searches, setSearches] = useState([...advancedSearches]);

  const handleSelect = (id) => {
    const newSearches = searches.map((search) => {
      if (search.id === id) {
        search.checked = !search.checked;
      }
      return search;
    });
    setSearches(newSearches);
  };

  const handleSelectedSearches = () => {
    const selectedSearches = searches.filter((item) => item.checked);
    close();
    setSearches(
      searches.map((item) => {
        if (item.checked) item.checked = false;
        return item;
      })
    );
    getAmenities(selectedSearches);
    return selectedSearches;
  };
  return (
    <Modal>
      <div className="advanced">
        <div className="advanced_container">
          <div className="advanced_header">
            <h5>ADVANCED SEARCH</h5>
            <div className="advanced_icon" onClick={close}>
              <p>x</p>
            </div>
          </div>
          <div className="advanced_content">
            <h5>AMENITIES:</h5>
            <div className="advanced_items">
              {searches.map((item) => (
                <SearchItem
                  {...item}
                  key={item.id}
                  handleSelect={handleSelect}
                />
              ))}
            </div>
            {<Button onclick={handleSelectedSearches}>Done</Button>}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AdvancedSearch;
