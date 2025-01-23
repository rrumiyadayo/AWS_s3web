import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AnimePage from "./pages/Anime/HomePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/anime" element={<AnimePage />}></Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
