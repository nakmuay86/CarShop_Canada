import React, { useState } from 'react';
import './CarFilter.css';
import Search from './search-icon.png';

const CarFilter = ({ onFilterChange }) => {
  const [name, setName] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Пример массива предложенных запросов
  const allSuggestions = [
    'Toyota',
    'Honda',
    'Ford',
    'Chevrolet',
    'Nissan',
    'BMW',
    'Mercedes',
    'Volkswagen',
  ];

  const handleFilterChange = () => {
    onFilterChange(name === '' ? null : { name });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setName(value);
    
    // Фильтруем предложения на основе введенного текста
    if (value) {
      const filteredSuggestions = allSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }

    handleFilterChange();
  };

  return (
    <div className="car-filter">
      <input
        type="text"
        placeholder="Search"
        value={name}
        onChange={handleInputChange}
      />
      <img className='searchBut' src={Search} alt="Search" onClick={handleFilterChange} />

      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => {
              setName(suggestion);
              setSuggestions([]);
              handleFilterChange();
            }}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarFilter;
