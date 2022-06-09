import React, { useState } from 'react';
import Select from 'react-select';
import './Dropdown.css';
// options, placeholder, src, title
const Dropdown = ({ cls, ...props }) => {
  const style = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
        border: state.isFocused ? 0 : 0
      }
    })
  }

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
          styles={style}

        />
      </div>
    </div>
  );
};

export default Dropdown;
