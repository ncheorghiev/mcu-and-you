import React, { useState } from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect 
} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Home from './pages/Home';
import MCUPhases from './pages/MCUPhases';
import Upcoming from './pages/Upcoming';
import DisneyParks from './pages/DisneyParks';

const App = () => {

  return (
    <Router>
        <div>
          <Switch>
            <Route exact path='/Home'>
              <Navbar />
              <Home />
            </Route>
            <Route exact path='/MCUPhases'>
              <Navbar />
              <MCUPhases />
            </Route>
            <Route exact path='/Upcoming'>
              <Navbar />
              <Upcoming />
            </Route>
            <Route exact path='/DisneyParks'>
              <Navbar />
              <DisneyParks />
            </Route>
          </Switch>
        </div>
      </Router>
    // <div>
    //   <Navbar />
    //   <ProjectCard 
    //     poster="https://lumiere-a.akamaihd.net/v1/images/p_thefalconandthewintersoldier_disneyplus_20653-1_a0638b8c.jpeg"
    //     alt="The Falcon and the Winter Soldier poster"
    //     title="The Falcon and the Winter Soldier" 
    //     synopsis="Following the events of “Avengers: Endgame,” Sam Wilson/Falcon (Anthony Mackie) and Bucky Barnes/Winter Soldier (Sebastian Stan) team up in a global adventure that tests their abilities—and their patience—in Marvel Studios’ “The Falcon and The Winter Soldier.”"
    //     date="March 19, 2021"
    //     director="Kari Skogland"
    //     writer="Malcom Spellman"
    //   />
    //   <ProjectCard 
    //     poster="https://lumiere-a.akamaihd.net/v1/images/p_wandavision_disneyplus_poster03_20118_66028c77.jpeg"
    //     alt="WandaVision poster"
    //     title="WandaVision"
    //     synopsis="Marvel Studios’ “WandaVision” blends the style of classic sitcoms with the Marvel Cinematic Universe in which Wanda Maximoff (Elizabeth Olsen) and Vision (Paul Bettany)—two super-powered beings living their ideal suburban lives—begin to suspect that everything is not as it seems."
    //     date="January 15, 2021"
    //     director="Matt Shakman"
    //     writer="Jac Schaeffer"
    //   />
    // </div>
    // <div>Hello World</div>
  );
};

export default App;
