import RestaurantCard from "./RestaurantCard";
import { MOCK_RESTAURANTS } from "../utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";

const Body = () => {
  const resData = MOCK_RESTAURANTS;
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SWIGGY_API_URL);
        console.log("Response from Swiggy API:", response);
        const json = await response.json();
        console.log("Data from Swiggy API:", json);
        const restaurantData =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ||
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setRestaurantList(restaurantData);
        setFilteredList(restaurantData);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchData();
  }, []);

  const filterRestaurantsBySearch = (searchText, restaurants) => {
    console.log("Filtering restaurants by search text:", searchText);

    if (!searchText.trim()) {
      setFilteredList(restaurants);
      return;
    }

    const filtered = restaurants.filter((restuarant) => {
      return restuarant?.info?.name
        ?.toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setFilteredList(filtered);
  };

  const filterRestaurantsByRating = (restaurants) => {
    const filtered = restaurants.filter((restaurant) => {
      return restaurant?.info?.avgRating >= 4.5;
    });
    console.log(
      "Original Count:",
      restaurants.length,
      "Filtered Count:",
      filtered.length,
    );
    setFilteredList(filtered);
  };

  return (
    <main className='w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6'>
      {/* Control Bar: Search and Filters */}
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-gray-200'>
        {/* Search Bar */}
        <section
          id='search-bar'
          className='relative flex items-center w-full md:max-w-md'>
          <input
            type='text'
            value={searchText}
            onChange={(e) => {
              // e.preventDefault();
              const currentText = e.target.value;
              setSearchText(currentText);
              filterRestaurantsBySearch(currentText, restaurantList);
            }}
            className='w-full pl-11 pr-24 py-2.5 bg-gray-50 border border-gray-300 rounded-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition'
            placeholder='Search for restaurants, cuisines or a dish...'
          />
          {/* Magnifying Glass Icon */}
          <span className='absolute left-4 text-gray-400 pointer-events-none'>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z'
              />
            </svg>
          </span>
        </section>

        {/* Filter Buttons */}
        <section
          id='filter-bar'
          className='flex items-center gap-2.5 overflow-x-auto pb-1 md:pb-0'>
          <button
            type='button'
            onClick={(e) => {
              // e.preventDefault();
              console.log("clicked in top rated filter");
              filterRestaurantsByRating(restaurantList);
            }}
            className='px-4 py-1.5 text-xs font-semibold rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 shadow-sm transition-all whitespace-nowrap'>
            Top Rated Restaurants
          </button>
          <button
            type='button'
            className='px-4 py-1.5 text-xs font-semibold rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 shadow-sm transition-all whitespace-nowrap'>
            Fast Delivery
          </button>
          <button
            type='button'
            onClick={(e) => {
              // e.preventDefault();
              setFilteredList(restaurantList);
            }}
            className='px-3.5 py-1.5 text-xs font-medium text-gray-500 hover:text-swiggy hover:bg-orange-50 rounded-full transition-colors whitespace-nowrap'>
            Reset
          </button>
        </section>
      </div>

      {/* Restaurant Section */}
      <section id='restaurant-section' className='mt-8'>
        <h2 className='text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-6'>
          Restaurants with online food delivery
        </h2>

        {/* Hardcoded Restaurant Cards Grid (Ready for your React state & map practice) */}
        <div className='restaurant-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-9'>
          {filteredList.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Body;
