import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Market from "./pages/market";
import HomePage from "./pages/home";
import Payment from "./pages/payment";
import Profile from "./pages/profile";
import LoginPage from "./pages/login";
import AuthProvider from "./context/AuthContext";
import RegisterPage from "./pages/register";
import ProtectedRoute from "./components/ProtectedRoute";
import AlertNotification from "./components/Modal";
import UiTest from "./pages/uitest";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/market" element={<Market />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/uitest" element={<UiTest />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
