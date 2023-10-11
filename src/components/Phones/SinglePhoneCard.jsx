import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const SinglePhoneCard = ({ phone }) => {
    const { brand_name, id, image, phone_name, price, rating } = phone || {};
    // console.log(phone)
    return (

        <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative p-[.5em] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                    src={image}
                    className="h-[250px] w-full object-cover"
                />
            </div>
            <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {brand_name}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        ${price}
                    </p>
                </div>
                <p className="block font-sans text-xl font-medium leading-relaxed text-blue-gray-900 antialiased">
                    {phone_name}
                </p>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75 mt-3">
                    <Rating
                        emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z" fill="rgba(240,187,64,1)"></path></svg>}
                        fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg>}
                        initialRating={rating}
                        readonly
                    />
                </p>
            </div>
            <div className="p-6 pt-0">
                <Link to={`/phones/${id}`}>
                    <button
                        className="block w-full select-none rounded-lg bg-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        See Details
                    </button>
                </Link>
            </div>
        </div>


    );
};

export default SinglePhoneCard;