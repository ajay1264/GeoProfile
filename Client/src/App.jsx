import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProfileDetails from './pages/ProfileDetails.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
