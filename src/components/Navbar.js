import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">NFT Market</Link>
      </div>

      <div className="nav-links-container">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marketplace">Marketplace</Link></li>
          <li><Link to="/mint">Mint</Link></li>
        </ul>
      </div>

      <div className="wallet-button-container">
        <button className="connect-wallet">Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;
