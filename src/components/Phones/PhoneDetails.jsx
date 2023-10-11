import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailCard from './DetailCard';

const PhoneDetails = () => {
    const [phone, setPhone] = useState({});

    const { id } = useParams();
    const phones = useLoaderData();

    useEffect(() => {
        const findPhone = phones?.find(phone => phone.id === id);
        setPhone(findPhone)
    }, [id, phones])

    console.log(phone)
    return (
        <DetailCard phone={phone} key={phone.id}></DetailCard>
    );
};

export default PhoneDetails;