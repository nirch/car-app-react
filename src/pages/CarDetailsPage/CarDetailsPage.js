import React from 'react';
import { useParams } from 'react-router';

function CarDetailsPage(props) {
    const {id} = useParams();

    return (
        <div>
            CarDetailsPage
            <p>{id}</p>
        </div>
    );
}

export default CarDetailsPage;