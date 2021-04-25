import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CarDetailsPage from './pages/CarDetailsPage/CarDetailsPage';
import CarsPage from './pages/CarsPage/CarsPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      {/* <header>Header</header> */}
      <HashRouter>
          <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/cars"><CarsPage/></Route>
            <Route exact path="/cars/:index"><CarDetailsPage/></Route>
            <Route path="/"><NotFoundPage/></Route>
          </Switch>
      </HashRouter>
      {/* <footer>Footer</footer> */}
    </div>
  );
}

export default App;
