import React, { useEffect, useState } from 'react';
import FavoriteCard from '../components/FavoriteCard/FavoriteCard';

const Favorite = () => {
    const [favorite, setFavorite] = useState([]);
    const [noFound, setNoFound] = useState('');
    const [isShow, setIsShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
        if (favoriteItems) {
            setFavorite(favoriteItems);
            const total = favoriteItems.reduce((preValue, currentValue) => preValue + currentValue.price, 0);
            setTotalPrice(total.toFixed(2));
        } else {
            setNoFound('No Data Found')
        }
    }, []);

    // console.log(favorite)

    const handleRemove = () => {
        localStorage.clear();
        console.log("clear")
        setFavorite([]);
        setNoFound('No Data Found')
    }

    return (
        <div className='container_section'>
            <div className="items-center justify-center h-full flex">
                {
                    noFound ? (
                        <p className='items-center justify-center h-[80vh] flex text-2xl font-semibold text-gray-500'>{noFound}</p>
                    ) : (<div className='mt-28'>
                        {/*===== item remove button ====*/}
                        <div className=' w-full text-center mx-auto'>
                            {
                                favorite.length > 0 && <div> <button onClick={handleRemove} className='text-xl text-white bg-gray-600 rounded block text-center py-2 px-6 mx-auto'>Delate All Favorite Items</button></div>
                            }
                        </div>
                        {/* ======== total Price ======= */}
                        <div className='text-center mt-4 '>
                            <h2 className='text-xl'>Total Favorite Items: {favorite.length}</h2>
                            <h3>
                                <span className='text-xl font-semibold '>Total Price: </span>
                                <span className='text-2xl font-semibold text-indigo-900'>${totalPrice}</span>
                            </h3>
                        </div>
                        {/*==== favorite item =====*/}
                        <div className='grid grid-cols-3 gap-5 items-center justify-center'>
                            {
                                isShow ? favorite.map((phone) => (<FavoriteCard phone={phone} key={phone.id}></FavoriteCard>))
                                    : favorite.slice(0, 3).map((phone) => <FavoriteCard phone={phone} key={phone.id}></FavoriteCard>)
                            }
                        </div>
                        {/*===== less and more button =====*/}
                        <div className='py-12'>
                            {
                                favorite.length > 3 && <div>
                                    <button onClick={() => setIsShow(!isShow)} className='text-xl text-white bg-gray-600 rounded block text-center py-2 px-6 mx-auto'>
                                        {
                                            isShow ? "See Less" : "See More"
                                        }
                                    </button>
                                </div>
                            }
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Favorite;