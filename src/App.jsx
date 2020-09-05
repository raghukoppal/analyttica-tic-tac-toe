import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome/container';
import PlayBoard from './components/PlayBoard/container';
import WinBoard from './components/WinBoard/container';

const App = () => (
  <>
    <header className='app-header'>
      <img src={logo} className='logo' alt='logo' />
    </header>
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route path='/playboard'>
            <PlayBoard />
          </Route>
          <Route path='/winboard'>
            <WinBoard />
          </Route>
        </Switch>
      </Router>
    </div>
  </>
);

export default App;
