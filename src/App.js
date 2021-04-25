import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import CarsPage from './pages/CarsPage/CarsPage';

function App() {
  return (
    <div>
      <HashRouter>
        <Route path="/cars"><CarsPage/></Route>
      </HashRouter>
    </div>
  );
}

export default App;
