import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // ✅ Ensures animation & background are global
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Mint from "./pages/Mint";

function App() {
  return (
    <Layout> {/* ✅ Wrap all pages inside Layout.js */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/mint" element={<Mint />} />
      </Routes>
    </Layout>
  );
}

export default App;
