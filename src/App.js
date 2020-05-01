import React from 'react';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';
import PropertyGallery from './components/PropertyGallery';
import OwnersLanding from './components/OwnersLanding';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={HomePage}></Route>
          <Route exact path="/aboutus" component={AboutUs}></Route>
          <Route exact path="/gallery" component={PropertyGallery}></Route>
          <Route exact path="/owner" component={OwnersLanding}></Route>
        </Switch>
      </BrowserRouter>
      FOOTER
    </div>
  );

}

export default App;
