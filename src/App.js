import React from 'react';
import './App.css';
import PrimarySearchAppBar from './NavBar'
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <h1>hello</h1>
    </div>
    // <Router>
    //   <Navbar />
    //   <Switch>
    //     <Route path='/' exact component={Home} />
    //     <Route path='/services' component={Services} />
    //     <Route path='/products' component={Products} />
    //     <Route path='/contact-us' component={ContactUs} />
    //     <Route path='/sign-up' component={SignUp} />
    //     <Route path='/marketing' component={Marketing} />
    //     <Route path='/consulting' component={Consulting} />
    //   </Switch>
    // </Router>
  );
}

export default App;