import React from 'react';
import Rating from 'react-rating';

const FavoriteCard = ({ phone }) => {
    const { brand_name, id, image, phone_name, price, rating } = phone || {};
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
            <img className="rounded-t-lg" src={image} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{phone_name}</h5>
                <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400 flex items-center justify-between">
                    <span>{brand_name}</span>
                    <div className="flex mt-1.5 items-center justify-center ">
                        <Rating
                            emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z" fill="rgba(240,187,64,1)"></path></svg>}
                            fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg>}
                            initialRating={rating}
                            readonly
                        />
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                    </div>
                    <span className='font-semibold text-xl'>${price}</span>
                </p>

            </div>
        </div>

    );
};

export default FavoriteCard;