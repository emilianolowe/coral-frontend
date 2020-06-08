import React from 'react';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';
import PropertyGallery from './components/PropertyGallery';
import PropertyDetailsPage from './components/PropertyDetailsPage';
import MyProperty from './components/MyProperty';
import OwnersLanding from './components/OwnersLanding';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Footer from "./components/Footer";
import Login from "./components/Login";
import Chat from "./components/Chat";
import Settings from "./components/Settings";
import CreateAccount from "./components/CreateAccount";
import ForgotPassword from "./components/ForgotPassword";
import MyProperties from "./components/MyProperties";
import AddProperty from "./components/AddProperty";
import EditProperty from "./components/EditProperty";
import EditPropertyPics from "./components/EditPropertyPics";
import Cookies from 'universal-cookie';

function App() {

  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
      const cookies = new Cookies();
      if (cookies.get("coraluser")) {
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
          <ProtectedRoute path='/addproperty' component={AddProperty} />
          <ProtectedRoute path='/editProperty' component={EditProperty} />
          <ProtectedRoute path='/editPropertyPics' component={EditPropertyPics} />
          <Route exact path="/chat" component={Chat}></Route>
          <Route exact path="/property" component={PropertyDetailsPage}></Route>
          <Route exact path="/owner" component={OwnersLanding}></Route>
          <Route exact path="/login" component={Login}></Route>
          <ProtectedRoute path='/settings' component={Settings} />
          <Route exact path="/createaccount" component={CreateAccount}></Route>
          <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
