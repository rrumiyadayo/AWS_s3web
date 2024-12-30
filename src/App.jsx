import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import HomePage from './pages/HomePage';

function ExperiencePage() {
  const { slug } = useParams();
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-4">Experience: {slug}</h2>
        <p className="text-gray-700">Content for {slug} will go here.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience/:slug" element={<ExperiencePage />} />
      </Routes>
    </Router>
  );
}

export default App;
