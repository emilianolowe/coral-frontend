import React from 'react';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';
import PropertyGallery from './components/property/PropertyGallery';
import PropertyDetailsPage from './components/property/PropertyDetailsPage';
import MyProperty from './components/property/MyProperty';
import OwnersLanding from './components/OwnersLanding';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Footer from "./components/Footer";
import Login from "./components/profile/Login";
import Chat from "./components/chat/Chat";
import Profile from "./components/profile/Profile";
import CreateAccount from "./components/profile/CreateAccount";
import ForgotPassword from "./components/profile/ForgotPassword";
import MyProperties from "./components/property/MyProperties";
import AddProperty from "./components/property/AddProperty";
import EditProperty from "./components/property/EditProperty";
import {isLoggedIn} from './DAO/UsersDAO'

function App() {

  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
      if (isLoggedIn()) {
        console.log("logged in. returning normal component")
        return (<Component {...props} />);
      }
      console.log("not logged in. redirecting to login page")
      console.log(props.location)
      //return (<Redirect to={{ pathname: '/login?path='+props.location.pathname+'&search='+props.location.search, state: { from: props.location }}} /> )
      return (<Redirect to={'/login?from=' + props.location.pathname + props.location.search} />)
    }} />
  );

  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/aboutus" component={AboutUs}></Route>
          <Route exact path="/gallery" component={PropertyGallery}></Route>
          <ProtectedRoute path='/myproperties' component={MyProperties} />
          <ProtectedRoute path='/myproperty' component={MyProperty} />
          <Route path='/addproperty' component={AddProperty} />
          <ProtectedRoute path='/editProperty' component={EditProperty} />
          <ProtectedRoute exact path="/chat" component={Chat}></ProtectedRoute>
          <Route exact path="/property" component={PropertyDetailsPage}></Route>
          <Route exact path="/owner" component={OwnersLanding}></Route>
          <Route exact path="/login" component={Login}></Route>
          <ProtectedRoute path='/profile' component={Profile} />
          <Route exact path="/createaccount" component={CreateAccount}></Route>
          <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
