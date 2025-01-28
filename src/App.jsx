import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SWRConfig } from "swr";
import fetcher from "./utils/fetcher";
import HomePage from "./pages/Home/HomePage";
import AnimePage from "./pages/Anime/HomePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <SWRConfig value={{ fetcher }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anime" element={<AnimePage />} />
        </Routes>
      </SWRConfig>
    </BrowserRouter>
  );
}

export default App;