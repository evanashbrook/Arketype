import logo from './logo.svg';
import React, { useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Appm from './Components/Appm';
import Appd from './Components/Appd';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import Philosophy from './Components/Philosophy';
import Movies from './Components/Movies';
import MoviesRouter from './Components/MoviesRouter';
import PhilosophyRouter from './Components/PhilosophyRouter';
import ReactGA from 'react-ga'
import RouteChangeTracker from './Components/RouteChangeTracker';

const TRACKING_ID = "UA-206071003-1";
ReactGA.initialize(TRACKING_ID)

function App() {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
  return (
    <section className='App'>
      <Router>
      {isLandscape && <div className='routes'>
      <RouteChangeTracker />
        <Route path='/' exact component={Appd} />
        <Route path='/movies' component={MoviesRouter} />
        <Route path='/philosophy' component={PhilosophyRouter} />
        </div>}
        {isPortrait && <div className='routes'>
        <RouteChangeTracker />
        <Route path='/' exact component={Appm} />
        <Route path='/movies' component={MoviesRouter} />
        <Route path='/philosophy' component={PhilosophyRouter} />
        </div>}
      </Router>
    </section>
  );
}

export default App;
