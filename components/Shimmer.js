import Header from "./Header";
const Shimmer = () => {
  return(


    <div className="shimmer-container">


        
        <div className="shimmer-search-container">
        <input
          type="text"
          className='search-input-shimmer'
          placeholder=''
          value={''}
        />
          <button
          className="search-btn-shimmer"
        >
          Search
        </button>
        </div>

        <div className='sort-div-shimmer'>
        <button className='sort-by-rating-btn-shimmer'>Sort By Rating</button>
        <button className='sort-by-rating-btn-shimmer' >Sort by Delivery time</button>
        <button className='sort-by-rating-btn-shimmer' >Sort by Price - Low to High</button>
        <button className='sort-by-rating-btn-shimmer' >Sort by Price - Low to High</button>
      </div>
        <div className="shimmer-cards-container">
          <div className="shimmer-cards"></div>
          <div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div><div className="shimmer-cards"></div>
        
        
        
        </div>
      
    </div>
    



      

  );
}

export default Shimmer;