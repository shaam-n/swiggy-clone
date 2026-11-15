import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className='restaurant-card group flex flex-col cursor-pointer transition-transform duration-200 hover:scale-95'>
      {/* Image & Gradient Banner */}
      <div className='relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden shadow-md'>
        <img
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
          src={
            resData?.cloudinaryImageId
              ? CDN_URL + resData.cloudinaryImageId
              : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e22a034a-1089-4924-9279-94da56835191_10576.JPG"
          }
          alt='restaurant-img'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
        <div className='absolute bottom-2 left-3 right-3 text-white font-extrabold text-base tracking-tight uppercase drop-shadow-md truncate'>
          {resData?.aggregatedDiscountInfoV3?.subHeader}
        </div>
      </div>

      {/* Details */}
      <div className='pt-3 px-1 flex flex-col gap-0.5'>
        <h3 className='font-bold text-lg text-gray-900 truncate'>
          {resData?.name}
        </h3>
        <div className='flex items-center gap-1.5 text-sm font-semibold text-gray-800'>
          <span className='inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-700 text-white text-[11px] font-bold'>
            ★
          </span>
          <span>{resData?.avgRating || "4.4"}</span>
          <span className='text-gray-400'>•</span>
          <span>{resData?.sla?.slaString}</span>
        </div>
        <p className='text-gray-500 text-sm truncate'>
          {resData?.cuisines?.join(", ")}
        </p>
        <p className='text-gray-500 text-sm truncate'>{resData?.locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
