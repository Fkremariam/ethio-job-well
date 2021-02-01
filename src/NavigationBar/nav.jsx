import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function nav() {
    const style= {
        // color:'white'
    }
  return (
    <nav className="nav">
      <h3>logo</h3>
      <ul className="navLinks">
        <Link style={style} to="./about">
          <li><a href="#">about</a></li>
        </Link>
        <Link style={style} to="./shop">
          <li><a href="#">shop</a></li>
        </Link>
      </ul>
    </nav>
  );
}

export default nav;
