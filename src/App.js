import React from 'react';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';
import PropertyGallery from './components/PropertyGallery';
import PropertyDetailsPage from './components/PropertyDetailsPage';
import OwnersLanding from './components/OwnersLanding';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={HomePage}></Route>
          <Route exact path="/aboutus" component={AboutUs}></Route>
          <Route exact path="/gallery" component={PropertyGallery}></Route>
          <Route exact path="/property" component={PropertyDetailsPage}></Route>
          <Route exact path="/owner" component={OwnersLanding}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/createaccount" component={CreateAccount}></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
