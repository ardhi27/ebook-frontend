import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Market from "./pages/market";
import HomePage from "./pages/home";
import Profile from "./pages/profile";
import LoginPage from "./pages/login";
import AuthProvider from "./context/AuthContext";
import RegisterPage from "./pages/register";
import ProtectedRoute from "./components/ProtectedRoute";
import BookDetail from "./pages/detail";
import SuccessPaymentPage from "./pages/detail/success";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/market" element={<Market />} />
            {/* <Route path="/payment" element={<Payment />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/detail/:id" element={<BookDetail />} />
            <Route path="/detail/success" element={<SuccessPaymentPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
