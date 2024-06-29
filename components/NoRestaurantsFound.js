import React from 'react';

const NoRestaurantsFound = ({ 
  searchText, 
  setSearchText, 
  handleSearch, 
  handleKeyPress, 
  handleSort, 
  handleDelivery, 
  handleCost, 
  handleCost2 
}) => {
  return (
    <div className='total-div'>
      <div className="search-div">
        <input
          type="text"
          className='search-input'
          placeholder='Search for a restaurant'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className='sort-div'>
        <button className='sort-by-rating-btn' onClick={handleSort}>Sort By Rating</button>
        <button className='sort-by-rating-btn' onClick={handleDelivery}>Sort by Delivery time</button>
        <button className='sort-by-rating-btn' onClick={handleCost}>Sort by Price - High to Low</button>
        <button className='sort-by-rating-btn' onClick={handleCost2}>Sort by Price - Low to High</button>
      </div>

      <div className="no-restaurants-found">
        No results found for "{searchText}"
      </div>
    </div>
  );
}

export default NoRestaurantsFound;
