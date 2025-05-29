import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import MatchesPage from "./components/MatchesPage";
// add routing using react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/matches" element={<MatchesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
