import React, { useState, useEffect } from "react";
import "./Marketplace.css";

const Marketplace = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const mockNFTs = [
      { id: 1, name: "Digital Art #1", price: "0.5 ETH", image: "https://via.placeholder.com/300" },
      { id: 2, name: "Digital Art #2", price: "0.8 ETH", image: "https://via.placeholder.com/300" },
      { id: 3, name: "Exclusive NFT #3", price: "1.2 ETH", image: "https://via.placeholder.com/300" },
      { id: 4, name: "Limited Edition #4", price: "0.9 ETH", image: "https://via.placeholder.com/300" },
    ];
    setNfts(mockNFTs);
  }, []);

  return (
    <div className="marketplace-container">
      <h1 className="marketplace-title">Explore Unique NFTs</h1>
      <p className="marketplace-subtitle">Own exclusive digital assets in the blockchain world</p>

      <div className="nft-grid">
        {nfts.map((nft) => (
          <div key={nft.id} className="nft-card">
            <img src={nft.image} alt={nft.name} className="nft-image" />
            <div className="nft-details">
              <h2 className="nft-name">{nft.name}</h2>
              <p className="nft-price">{nft.price}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
