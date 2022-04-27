import React, { useState } from 'react';
import Select from 'react-select';
import './Dropdown.css';

const Dropdown = ({ options, placeholder, src, title }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="select_location">
      <img className={'select_icons'} src={src} alt="location" />
      <div>
        <label className="select_label">{title}</label>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          isSearchable={true}
          placeholder={placeholder}
          classNamePrefix="dropdown-select"
          className="dropdown-select-container"
        />
      </div>
    </div>
  );
};

export default Dropdown;
