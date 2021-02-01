import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './NavigationBar/nav';
import About from "./About/About";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ContactUs from './ContactUs/contactUs';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
        <Route path="/contactUs" component={ContactUs} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
