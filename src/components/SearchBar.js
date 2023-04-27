import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleClick = (value) => {
    setWordEntered(value);
    setFilteredData([]);
  };

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
        <div className='searchIcon' />
      </div>
      {filteredData.length !== 0 && (
        <div className='dataResults'>
          {filteredData.slice(0, 5).map((value, index) => {
            return (
              <p key={index} onClick={() => handleClick(value)}>
                {value}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;