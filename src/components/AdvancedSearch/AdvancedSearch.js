import './AdvancedSearch.css';
import Modal from '../Modal/Modal';
import Icon from '../../icons/index';
import SearchItem from '../SearchItem/SearchItem';
import { advancedSearches } from '../../Constants/index';
import { useState } from 'react';
import Button from '../Btn/Btn';

// const copiedSearch = advancedSearches;
const AdvancedSearch = ({ close }) => {
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
    console.log(selectedSearches);
    close();
    setSearches(
      searches.map((item) => {
        if (item.checked) item.checked = false;
        return item;
      })
    );
    return selectedSearches;
  };
  console.log(advancedSearches);
  return (
    <Modal>
      <div className="advanced">
        <div className="advanced_container">
          <div className="advanced_header">
            <h5>ADVANCED SEARCH</h5>
            <div className="advanced_icon" onClick={close}>
              <Icon type="search-cancel" />
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
