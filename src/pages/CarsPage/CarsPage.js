import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import CarRow from '../../components/CarRow/CarRow';
import CarModel from '../../model/CarModel';

function CarsPage(props) {
    const [cars, setCars] = useState([
        new CarModel("Toyota", "Yaris", 2002, 240000),
        new CarModel("Toyota", "Corola", 2015, 115000),
        new CarModel("Hyundai", "i30", 2010, 180000)
    ]);

    // finding the car with the highest km per year
    let highestKmPerYear = cars[0];
    for (const car of cars) {
        if (car.kmPerYear() > highestKmPerYear.kmPerYear()) {
            highestKmPerYear = car;
        }
    }



    const carRows = cars.map(car => <CarRow car={car} isHighest={car === highestKmPerYear}/>)

    return (
        <Container className="p-cars">
            <Table hover>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>KM</th>
                        <th>KM Per Year</th>
                    </tr>
                </thead>
                <tbody>
                    {carRows}
                </tbody>
            </Table>
        </Container>
    );
}

export default CarsPage;