import React from "react";
import { Routes, Route } from "react-router-dom";
import DeathPage from "pages/deathsearch";
import BirthPage from "pages/birthsearch/birth";
import HomePage from "pages/home";
import Header from "common/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/missing_person" element={<DeathPage />} />
        <Route path="/identified_person" element={<DeathPage />} />
        <Route path="/dead_bodies" element={<DeathPage />} />
        <Route path="/birth" element={<BirthPage />} />
        <Route path="/about" element={<DeathPage />} />
        <Route path="/contact" element={<BirthPage />} />
        <Route path="/press" element={<BirthPage />} />
        <Route path="/question" element={<BirthPage />} />
      </Routes>
    </div>
  );
}

export default App;
