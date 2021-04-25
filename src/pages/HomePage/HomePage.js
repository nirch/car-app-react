
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage(props) {
    return (
        <div>
            <Container>
                <h1 className="display-1">Cars App</h1>
                <p>Amazing car app!!</p>
                {/* <Button href="#/cars">Enter</Button> */}
                <Link className="btn btn-primary" to="/cars">Enter</Link>
            </Container>
        </div>
    );
}

export default HomePage;