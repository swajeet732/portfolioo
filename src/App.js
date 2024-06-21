// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import ContactPage from './ContactMe';
import Home from './Home';
import Project from './Project';
import Skills from './Skills';
// Import other pages/components as needed

const App = () => {
  return (
    <div>
      <Header />
      {/* Define routes for other pages */}
      <Routes>
      <Route path="/portfolio" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        {/* Add routes for other pages/components */}
      </Routes>
    </div>
  );
};

export default App;
