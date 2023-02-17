import React, { useState } from 'react';
import './Search.css'

function Search(props) {
  const { users, onSearch } = props;
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    onSearch(filteredUsers);
  };

  return (
    <div className="search">
      <label htmlFor="search-input">Search contacts:</label>
      <input
        type="text"
        id="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
