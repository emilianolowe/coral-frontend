import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const AboutUsRoute = () => {
    return (
      <AboutUs />
    )
  }
  return (
    <div className="App">
      <h1>Hello Coral hello!!!!</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/aboutus" component={AboutUsRoute}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;