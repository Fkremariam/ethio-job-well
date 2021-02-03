import React from 'react';
import './App.css';
import PrimarySearchAppBar from './NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './Compontes/Categories'
import Treading from './Compontes/Treading'
import New from './Compontes/New'
import Unread from './Compontes/Unread'
import Popup from './Compontes/PopupLogin'


function App() {
  return (
    <div className="App"> 
    <Router>
      <PrimarySearchAppBar /> 
      <Switch>
        <Route path='/' exact component={Categories} />
        <Route path='/treading' exact component={Treading} />
        <Route path='/newJobs' exact component={New} />
        <Route path='/unread' exact component={Unread} />
        {/* <Route path='/sign-up' component={SignUp} /> */}
        <Route path='/' exact component={Popup} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;