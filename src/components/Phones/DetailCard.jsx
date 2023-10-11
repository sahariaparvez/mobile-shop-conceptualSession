import React from 'react';
import Rating from 'react-rating';
import Swal from 'sweetalert2';

const DetailCard = ({ phone }) => {
    const { brand_name, id, image, phone_name, price, rating } = phone || {};

    const handleToFavorite = () => {

        const addedFavoritesArray = [];

        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
        if (!favoriteItems) {
            addedFavoritesArray.push(phone);
            localStorage.setItem('favorites', JSON.stringify(addedFavoritesArray));
            Swal.fire(
                'Good job!',
                'Products added successfully!',
                'success'
            )
        } else {
            const isExits = favoriteItems.find((phone) => phone.id === id);
            if (!isExits) {
                addedFavoritesArray.push(...favoriteItems, phone);
                localStorage.setItem('favorites', JSON.stringify(addedFavoritesArray));
                Swal.fire(
                    'Good Job!',
                    'Products added successfully!',
                    'success'
                )
            } else {
                Swal.fire(
                    'Error!',
                    'No Duplicate!',
                    'error'
                )
            }
        }
        console.log(favoriteItems)





    }



    return (
        <div className='container_section items-center justify-center min-h-[100vh] flex '>
            <div className="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="p-8 rounded-t-lg" src={image} alt="product image" />
                <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{phone_name}</h5>
                    <div className="flex items-center mt-2.5 mb-5">
                        <Rating
                            emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z" fill="rgba(240,187,64,1)"></path></svg>}
                            fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg>}
                            initialRating={rating}
                            readonly
                        />
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                        <button onClick={handleToFavorite} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Favorite</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DetailCard;