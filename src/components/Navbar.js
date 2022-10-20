import React from "react";

export default function Navbar() {
    return(
        <nav className="app-navbar">
          <div className="nav-logo">
          <img src="./img/tr.png" alt="meme-generator" className="nav-logo-img"/>
            <h2 className="navbar-title">MemeGenerator</h2>
            </div>
            <span className="navbar-project">Kseniya Shautsova . React projects</span>
        </nav>
    )
}