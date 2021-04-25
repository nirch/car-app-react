import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CarsPage from './pages/CarsPage/CarsPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <HashRouter>
          <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/cars"><CarsPage/></Route>
            <Route path="/"><NotFoundPage/></Route>
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
