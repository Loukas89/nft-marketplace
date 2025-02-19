import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo on the Left */}
      <div className="logo">
        <Link to="/">NFT Market</Link>
      </div>

      {/* Navigation Links on the Left */}
      <div className="nav-links-container">
        <ul className="nav-links">
          <li><Link to="/marketplace">Marketplace</Link></li>
          <li><Link to="/mint">Mint</Link></li>
        </ul>
      </div>

      {/* Search Bar in the Middle */}
      <div className="search-bar-container">
        <input type="text" className="search-bar" placeholder="Search NFTs..." />
      </div>

      {/* Wallet & Login Buttons on the Right */}
      <div className="wallet-button-container">
        <Link to="/login">
          <button className="login-btn">Log In</button>
        </Link>
        <button className="connect-wallet">Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;
