// Function to filter restaurants by name
// restaurantFunctions.js
export const filterData_byName = (searchText, restaurantsSearch) => {
  if (!searchText) return restaurantsSearch;
  return restaurantsSearch.filter(restaurant =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

// Function to sort restaurants by average rating (descending)
export function sortRestaurantsByRatingDesc(restaurants) {
  if (!Array.isArray(restaurants)) {
    return [];
  }
  return [...restaurants].sort((a, b) => b.info.avgRating - a.info.avgRating);
}

// Function to sort restaurants by delivery time (ascending)
export function sortRestaurantsByDeliveryAsc(restaurants) {
  if (!Array.isArray(restaurants)) {
    return [];
  }
  return [...restaurants].sort((a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime);
}

// Function to sort restaurants by costForTwo (descending)
export function sortRestaurantsByCostDesc(restaurants) {
  if (!Array.isArray(restaurants)) {
    return [];
  }
  return [...restaurants].sort((a, b) => {
    const costA = parseInt(a.info.costForTwo.match(/\d+/)[0], 10);
    const costB = parseInt(b.info.costForTwo.match(/\d+/)[0], 10);
    return costB - costA;
  });
}

// Function to sort restaurants by costForTwo (ascending)
export function sortRestaurantsByCostAsc(restaurants) {
  if (!Array.isArray(restaurants)) {
    return [];
  }
  return [...restaurants].sort((a, b) => {
    const costA = parseInt(a.info.costForTwo.match(/\d+/)[0], 10);
    const costB = parseInt(b.info.costForTwo.match(/\d+/)[0], 10);
    return costA - costB;
  });
}