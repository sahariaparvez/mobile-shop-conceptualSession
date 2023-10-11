import React from 'react';
import SinglePhoneCard from './SinglePhoneCard';

const Phones = ({ phones }) => {

    return (
        <div className='py-7 px-3 bg-[#F8FAFC]'>
            <div className="container_section">
                <div className="section_title text-center mb-5">
                    <h1 className='text-2xl font-semibold'>All Phone Categories</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-7">
                    {
                        phones?.map((phone) => (
                            <SinglePhoneCard phone={phone} key={phone.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Phones;