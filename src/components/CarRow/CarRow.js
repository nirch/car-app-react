import React from 'react';

function CarRow({car}) {
    return (
        <tr onDoubleClick={() => console.log(car)}>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.km}</td>
            <td>{parseInt(car.kmPerYear())}</td>
        </tr>
    );
}

export default CarRow;