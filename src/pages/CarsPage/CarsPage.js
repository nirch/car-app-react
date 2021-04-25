import React from 'react';
import { Button, Container, Spinner, Table } from 'react-bootstrap';
import CarRow from '../../components/CarRow/CarRow';
import CarModel from '../../model/CarModel';

function CarsPage({cars, onAddCar}) {

    // finding the car with the highest km per year
    let highestKmPerYear;
    let carRows
    if (cars) {
        highestKmPerYear = cars[0];
        for (const car of cars) {
            if (car.kmPerYear() > highestKmPerYear.kmPerYear()) {
                highestKmPerYear = car;
            }
        }
        carRows = cars.map((car, index) => <CarRow key={index} car={car} isHighest={car.kmPerYear() === highestKmPerYear.kmPerYear()}/>)
    }


    function addCar() {
        onAddCar(new CarModel("Subaru", "B4", 2018, 100000));
    }



    return (
        <Container className="p-cars">
            {cars ?
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
                </Table> :
                <Spinner animation="border"/>
            }
            <Button onClick={addCar}>Add Car</Button>
        </Container>
    );
}

export default CarsPage;