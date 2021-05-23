import CarModel from "./CarModel"



it('successfully creates an instance of CarModel', () => {
    const car = new CarModel("Toyota", "Yaris", 2012, 100000);
    expect(car).toBeDefined();
    expect(car.brand).toEqual("Toyota");
    expect(car.model).toEqual("Yaris");
    expect(car.year).toEqual(2012);
    expect(car.km).toEqual(100000);
});

it('successfully calculates km per year', () => {
    const car = new CarModel("Toyota", "Yaris", 2012, 100000);
    expect(car.kmPerYear()).toEqual(10000);
});

it('successfully calculates km per year to the same year', () => {
    const car = new CarModel("Toyota", "Yaris", 2021, 20000);
    expect(car.kmPerYear()).toEqual(20000);
});