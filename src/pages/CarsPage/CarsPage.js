import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import CarModel from '../../model/CarModel';

function CarsPage(props) {
    const [cars, setCars] = useState([
        new CarModel("Toyota", "Yaris", 2002, 240000),
        new CarModel("Toyota", "Corola", 2015, 115000),
        new CarModel("Hyundai", "i30", 2010, 180000)
    ]);




    return (
        <Container className="p-cars">
            <Table>
                <thead>
                    <tr>
                        <td>Brand</td>
                        <td>Model</td>
                        <td>Year</td>
                        <td>KM</td>
                        <td>KM Per Year</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>
        </Container>
    );
}

export default CarsPage;