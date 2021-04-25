import axios from 'axios';
import React, { useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';

function CarDetailsPage({cars}) {
    const {index} = useParams();

    // With a server side instead of sending all cars to this compnent
    // We can read the car details from the server
    // useEffect(() => {
    //     axios.get("/car/index").then({
    //         ...
    //     })
    // }, [])

    return (
        <div>
            <Container>
                {
                    cars ? 
                    <>
                        <p>Brand: {cars[index].brand}</p>
                        <p>Model: {cars[index].model}</p>
                        <p>Year: {cars[index].year}</p>
                        <p>KM: {cars[index].km}</p>
                        <p>Km Per Year: {cars[index].kmPerYear()}</p>
                    </> : <Spinner/>
                }
            </Container>
        </div>
    );
}

export default CarDetailsPage;