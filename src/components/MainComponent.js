import React, { Component } from 'react';
import AboutUs from './AboutUs';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class Main extends Component {
  render() {
    const AboutUsRoute = () => {
      return (
        <AboutUs />
      )
    }
    return (
      <div>
        <h1>Hello Coral hello!!!!</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/aboutus" component={AboutUsRoute}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Main;