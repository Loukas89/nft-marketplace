import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Discover, Collect, and Sell Extraordinary NFTs</h1>
        <p>The world’s largest decentralized NFT marketplace</p>
        <div className="buttons">
          <Link to="/marketplace" className="button explore">Explore Marketplace</Link>
          <Link to="/mint" className="button mint">Mint NFT</Link>
        </div>
      </section>

      {/* Featured NFTs Section */}
      <section className="featured-nfts">
        <h2>Featured NFTs</h2>
        <div className="nft-grid">
          <div className="nft-card">
            <img src="https://via.placeholder.com/200" alt="NFT 1" />
            <p>Crypto Art #1</p>
          </div>
          <div className="nft-card">
            <img src="https://via.placeholder.com/200" alt="NFT 2" />
            <p>Crypto Art #2</p>
          </div>
          <div className="nft-card">
            <img src="https://via.placeholder.com/200" alt="NFT 3" />
            <p>Crypto Art #3</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
