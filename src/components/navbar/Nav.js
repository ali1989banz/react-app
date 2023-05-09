import React , {Component} from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

class Nav extends Component{
  render(){
    return (
      <div className="navbar">

        <div className="container">
        

          <div className="logo">
            <h2 className="logo-text">Ultra Profile</h2>
          </div>



          <ul className="ul-list">
            <NavLink to="/" className="list-item">Home</NavLink>
            <li><a href="#work" className="list-item">Work</a></li>
            <li><a href="#portfolio" className="list-item">Protfilio</a></li>
            <li><a href="/" className="list-item">Resume</a></li>
            <li><a href="#about" className="list-item">About</a></li>
            <NavLink to="/contact" className="list-item">Contact</NavLink>
          </ul>

        </div>

      </div>
    )
  }
}

export default Nav;