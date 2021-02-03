import React from 'react';
import './App.css';
import PrimarySearchAppBar from './NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './Compontes/Categories'
import Treading from './Compontes/Treading'
import New from './Compontes/New'
import Unread from './Compontes/Unread'
import Login from './Compontes/Login'


function App() {
  return (
    <div className="App"> 
    <Router>
      <PrimarySearchAppBar /> 
      <Switch>
        <Route path='/' exact component={Categories} />
        <Route path='/treading' component={Treading} />
        <Route path='/newJobs' component={New} />
        <Route path='/unread' component={Unread} />
        {/* <Route path='/sign-up' component={SignUp} /> */}
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;