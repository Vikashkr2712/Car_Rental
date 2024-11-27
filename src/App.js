import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./pages/Details";
import Payment from "./pages/Payment"; // Import the Search page
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
