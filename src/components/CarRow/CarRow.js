import React, { useState } from 'react';
import { Redirect } from 'react-router';

function CarRow({car, isHighest, index}) {
    const [redirectTo, setRedirectTo] = useState();

    if (redirectTo !== undefined) {
        return <Redirect to={'/cars/' + redirectTo}/>
    }

    return (
        <tr onDoubleClick={() => console.log(car)}
            onClick={() => setRedirectTo(index)}
            className={isHighest ? "bg-danger" : ""}>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.km}</td>
            <td>{parseInt(car.kmPerYear())}</td>
        </tr>
    );
}

export default CarRow;