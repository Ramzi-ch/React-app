import logo from './logo.svg';
import './App.css';
import { Home } from './components/home/Home';
import { Department } from './components/department/Department';
import { Employee } from './components/employee/Employee';
import { Navigation } from './components/navigation/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div >
        {/* <h3 className="m-3 d-flex justify-content-center">
        Welcome
      </h3> */}

        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/department' component={Department} exact />
          <Route path='/employee' component={Employee} exact />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
