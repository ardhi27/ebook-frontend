import { useState } from "react";

import "./App.css";
import Stack from "./components/Stack";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Market from "./pages/market";
import HomePage from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </Router>
  );
}

export default App;
