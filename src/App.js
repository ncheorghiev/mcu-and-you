import React, { useState } from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect 
} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectCard from './components/ShowCard';
import Home from './pages/Home';
import Phase4 from './pages/Phase4';
import InfinitySaga from './pages/InfinitySaga';
import DisneyParks from './pages/DisneyParks';
import FAQ from './pages/FAQ';

const App = () => {

  return (
    <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <Navbar />
              <Home />
            </Route>
            <Route exact path='/Home'>
              <Navbar />
              <Home />
            </Route>
            <Route exact path='/Phase4'>
              <Navbar />
              <Phase4 />
            </Route>
            <Route exact path='/InfinitySaga'>
              <Navbar />
              <InfinitySaga />
            </Route>
            <Route exact path='/DisneyParks'>
              <Navbar />
              <DisneyParks />
            </Route>
            <Route exact path='/FAQ'>
              <Navbar />
              <FAQ />
            </Route>
          </Switch>
        </div>
      </Router>
  );
};

export default App;
