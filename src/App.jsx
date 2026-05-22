import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import ScholarsPage from "./pages/ScholarsPage";
import UserDetails from "./pages/UserDetails";
import SignupPage from "./pages/Signup";
import QuotesPage from "./pages/Quotes";

// Loading Spinner Component
const LoadingSpinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="custom-blue-spinner"></div>
    </div>
  );
};

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading screen for first website open
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // First show loading screen
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Then show full website
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Scholars Directory */}
        <Route path="/scholars" element={<ScholarsPage />} />

        {/* Scholar Details Page */}
        <Route path="/scholars/:id" element={<UserDetails />} />

        {/* Signup Page */}
        <Route path="/signup" element={<SignupPage />} />

        {/* Quotes Page */}
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>
    </>
  );
}

function App() {
  // basename ko aapke GitHub repository ke naam ke mutabiq set kiya gaya hai
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;