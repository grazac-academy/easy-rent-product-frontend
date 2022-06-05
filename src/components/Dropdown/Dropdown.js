import React, { useState } from 'react';
import Select from 'react-select';
import './Dropdown.css';
// options, placeholder, src, title
const Dropdown = ({ cls, ...props }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={`select_location ${cls}`}>
      <img className={'select_icons'} src={props.src} alt="location" />
      <div className={'dropdown'}>
        <label className="select_label">{props.title}</label>
        {/* <select>
          <option>{props.placeholder}</option>
        </select> */}
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={props.options}
          isSearchable={true}
          placeholder={props.placeholder}
          classNamePrefix="dropdown-select"
          className="dropdown-select-container"
        />
      </div>
    </div>
  );
};

export default Dropdown;
