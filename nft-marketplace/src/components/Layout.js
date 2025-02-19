import React from "react";
import AnimatedBackground from "./AnimatedBackground";
import Navbar from "./Navbar";
import Footer from "./Footer"; // ✅ Import Footer

const Layout = ({ children }) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh", width: "100%", display: "flex", flexDirection: "column" }}>
      {/* ✅ Blockchain Animation Layer */}
      <AnimatedBackground />

      {/* ✅ Background Image Layer (Behind Animation) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/blockchain-bg.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: -2, // ✅ Ensures background stays behind everything
        }}
      />

      {/* ✅ Navbar is Above the Animation */}
      <Navbar />

      {/* ✅ Ensures Page Content is Above Animation */}
      <div style={{ position: "relative", zIndex: 2, flex: 1, paddingTop: "60px" }}>
        {children}
      </div>

      {/* ✅ Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
