import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Spinner, Table } from 'react-bootstrap';
import CarRow from '../../components/CarRow/CarRow';
import CarModel from '../../model/CarModel';

function CarsPage(props) {
    const [cars, setCars] = useState(null);

    // We want to fetch the cars data from JSON only once the compoenent is mounting
    useEffect(() => {
        axios.get("cars.json").then(response => {
            setCars(response.data.map(plainCar => new CarModel(plainCar.brand, plainCar.model, plainCar.year, plainCar.km)));
        }).catch(error => {
            console.error(error);
        });
    }, []);

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
        setCars(cars.concat(new CarModel("Subaru", "B4", 2018, 100000)));
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