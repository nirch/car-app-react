import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CarsPage from './pages/CarsPage/CarsPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <HashRouter>
          <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/cars"><CarsPage/></Route>
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
