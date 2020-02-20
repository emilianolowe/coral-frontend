import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import PropertyGallery from './components/PropertyGallery';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {

  const AboutUsRoute = () => {
    return (
      <AboutUs />
    )
  }

  const PropertyGalleryRoute = () => {
    return (
      <PropertyGallery />
    )
  }

  return (
    <div className="App">
      <h1>Hello Coral hello!!!!</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/aboutus" component={AboutUsRoute}></Route>
          <Route exact path="/gallery" component={PropertyGalleryRoute}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
