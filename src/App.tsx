import { useState } from "react";

import "./App.css";
import Stack from "./components/Stack";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Market from "./pages/market";
import HomePage from "./pages/home";
import Payment from "./pages/payment";
import Profile from "./pages/profile";
import LoginPage from "./pages/login";
import AuthProvider from "./context/AuthContext";
import RegisterPage from "./pages/register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Protected Route */}
          <Route path="/market" element={<Market />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          {/* ///////////// */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
