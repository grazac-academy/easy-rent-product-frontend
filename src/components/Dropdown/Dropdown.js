import React, { useState } from 'react';
import Select from 'react-select';


const options = [
    { value: 'Lagos', label: 'Lagos' },
    { value: 'Abuja', label: 'Abuja' },
    { value: 'Ogun', label: 'Ogun' },
  ];

export default function App() {
    const [selectedOption, setSelectedOption] = useState(null);
  
    return (
      <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          isSearchable={true}
          placeholder='State'
        //   autoFocus={true}
          borderColor='#ffff'
        />
      </div>
    );
  }