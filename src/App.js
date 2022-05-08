import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './auth/Login';
import Register from './auth/Register';

function App() {
  return (
    <div className='App'>
      {/* <header className='App-header'>
        <p>recat app</p>
      </header> */}
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
      </Switch>
    </div>
  );
}

export default App;
