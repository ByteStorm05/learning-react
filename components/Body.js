import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import {
  filterData_byName,
  sortRestaurantsByRatingDesc,
  sortRestaurantsByDeliveryAsc,
  sortRestaurantsByCostDesc,
  sortRestaurantsByCostAsc,
} from './restaurantFunctions'; // Adjust the path based on your file structure
import Shimmer from './Shimmer';
import NoRestaurantsFound from './NoRestaurantsFound';

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsSearch, setRestaurantsSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Search Function
  const handleSearch = () => {
    const filteredData = filterData_byName(searchText, restaurantsSearch);
    setRestaurants(filteredData);
  };

  // Sort Functions
  const handleSort = () => {
    const sortedData = sortRestaurantsByRatingDesc(restaurants);
    setRestaurants(sortedData);
  };

  const handleDelivery = () => {
    const sortedData = sortRestaurantsByDeliveryAsc(restaurants);
    setRestaurants(sortedData);
  };

  const handleCost = () => {
    const sortedData = sortRestaurantsByCostDesc(restaurants);
    setRestaurants(sortedData);
  };

  const handleCost2 = () => {
    const sortedData = sortRestaurantsByCostAsc(restaurants);
    setRestaurants(sortedData);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.505504&lng=77.095956&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    const restaurantData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    console.log('Fetched Data:', restaurantData);
    setRestaurants(restaurantData);
    setRestaurantsSearch(restaurantData);
    setIsLoading(false);
  };

  if (isLoading) {
    return <Shimmer />;
  }

  if (restaurants.length === 0 && searchText) {
    return (
      <NoRestaurantsFound
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        handleKeyPress={handleKeyPress}
        handleSort={handleSort}
        handleDelivery={handleDelivery}
        handleCost={handleCost}
        handleCost2={handleCost2}
      />
    );
  }

  return (
    <div className='body'>
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

      <div className="card-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
