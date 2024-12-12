import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ProfileDetails from "./pages/ProfileDetailsPage";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import { profiles as initialProfiles } from "./data"; // Import profiles mock data
import { v4 as uuidv4 } from "uuid"; // Using UUID for unique IDs
import "./App.css";

const App = () => {
  const [profiles, setProfiles] = useState(initialProfiles);

  // Add profile function
  const handleAddProfile = (newProfile) => {
    const profileWithId = { ...newProfile, id: uuidv4() }; // Ensure each profile has a unique ID
    setProfiles((prevProfiles) => [...prevProfiles, profileWithId]);
  };

  // Edit profile function
  const handleEditProfile = (updatedProfile) => {
    setProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      )
    );
  };

  // Delete profile function
  const handleDeleteProfile = (id) => {
    setProfiles((prevProfiles) => prevProfiles.filter((profile) => profile.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home profiles={profiles} />} />
        <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
        <Route
          path="/admin"
          element={
            <AdminPanel
              profiles={profiles}
              onAddProfile={handleAddProfile}
              onEditProfile={handleEditProfile}
              onDeleteProfile={handleDeleteProfile}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
