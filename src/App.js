import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CarModel from './model/CarModel';
import CarDetailsPage from './pages/CarDetailsPage/CarDetailsPage';
import CarsPage from './pages/CarsPage/CarsPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  const [cars, setCars] = useState(null);

  // We want to fetch the cars data from JSON only once the compoenent is mounting
  useEffect(() => {
      axios.get("cars.json").then(response => {
          setCars(response.data.map(plainCar => new CarModel(plainCar.brand, plainCar.model, plainCar.year, plainCar.km)));
      }).catch(error => {
          console.error(error);
      });
  }, []);

  function addCar(car) {
    setCars(cars.concat(car));
  }

  return (
    <div>
      {/* <header>Header</header> */}
      <HashRouter>
          <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/cars"><CarsPage cars={cars} onAddCar={addCar}/></Route>
            <Route exact path="/cars/:index"><CarDetailsPage cars={cars}/></Route>
            <Route path="/"><NotFoundPage/></Route>
          </Switch>
      </HashRouter>
      {/* <footer>Footer</footer> */}
    </div>
  );
}

export default App;
