import React, { useEffect, useState } from 'react';
import Hero from '../components/Home/Hero';
import Phones from '../components/Phones/Phones';

const Home = () => {

    const [phones, setPhones] = useState([]);


    useEffect(() => {
        fetch(`phoneData.json`)
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])
    // console.log(phones)
    return (
        <>
            <Hero />
            <Phones phones={phones} />
        </>
    );
};

export default Home;