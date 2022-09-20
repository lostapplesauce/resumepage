import React from 'react'
import '../stylesheets/Header.css'
import BandWTroy from '../images/bAndWTroy.jpg'

export default function Header() {
  setInterval(function () {
    document.getElementById("time").textContent = new Date().toLocaleTimeString()
  }, 1000)
  
    return (
      <header className="container">
        <div className="header--nameAndimageDiv">
        <img
          className="header--bAndWTroy"
          src={BandWTroy}
          alt="Me pretending to paint a masterpiece at Universal Studios "
        />
        <h1 className="header--name">Troy Turner</h1>
        </div>
        <div className="header--infoDiv">
          <h3>mobile: 077 470 71417</h3>
          <h3 className="email">email: troyturner444@gmail.com</h3>
          <div className="header--timeContainer">
            <p className="time--text">The locale time is:</p>
            <p id="time"></p>
          </div>
        </div>
      </header>
    );
}
