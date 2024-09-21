import React, { useState } from 'react';

const CitySearch = ({ setCity }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setCity(searchInput);
      setSearchInput('');
    }
  };

  return (
    <div className="city-search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search city..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default CitySearch;
