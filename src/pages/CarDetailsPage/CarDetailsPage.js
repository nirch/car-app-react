import React from 'react';
import { useParams } from 'react-router';

function CarDetailsPage(props) {
    const {index} = useParams();

    return (
        <div>
            CarDetailsPage
            <p>{index}</p>
        </div>
    );
}

export default CarDetailsPage;