import { render, screen } from '@testing-library/react';
import CarModel from '../../model/CarModel';
import CarsPage from './CarsPage';

it("renders without crashing", () => {
    render(<CarsPage/>)
})

it("renders without crashing when sending an empty cars array", () => {
    render(<CarsPage cars={[]}/>)
})


it("renders cars in table", () => {
    render(<CarsPage cars={[new CarModel("Toyota", "Yaris", 2012, 100000)]}/>)
    const linkElement = screen.getByText(/Toyota/i);
    expect(linkElement).toBeInTheDocument();
})