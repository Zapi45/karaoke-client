import "./App.css";

import React, { useState, useEffect } from "react";
import Homepage from "../pages/homepage";
import Game from "../pages/game";
import { Route, Routes } from "react-router";

const MyComponent = () => {
  // Le reste de votre composant ici
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
