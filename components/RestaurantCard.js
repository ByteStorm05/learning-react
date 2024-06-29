const RestaurantCard = (props) => {
  const {resData} = props

  // const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo}=resData?.data
  return (
    <div className='card'>
      <img className='card-image' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}></img>
      <div className='card-info'>
          <div className='card-name'> {resData.info.name} </div>
          <div className='card-desc'> {
            resData.info.cuisines.slice(0, 3).join(", ")
            }
           {/* resData.info.cuisines.join(", ") */}
          </div>
          <div className='card-more-info'>
            <div className='rating'>{resData.info.avgRating}⭐️</div>
            {/* <div className='dot'>•</div> */}   
            <div className='time'>{resData.info.sla.slaString}</div>
            {/* <div className='dot'>•</div> */}
            <div className='cost-for-two'>{resData.info.costForTwo}</div>

          </div>
      </div>
      
    </div>
  );
};

export default RestaurantCard;