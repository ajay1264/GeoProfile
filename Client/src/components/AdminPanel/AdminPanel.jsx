import React, { useState } from "react";
import "./AdminPanel.css";

const AdminPanel = ({ profiles, onAddProfile, onEditProfile, onDeleteProfile }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState("");
  const [editingProfileId, setEditingProfileId] = useState(null);
  const [error, setError] = useState(""); // Error state for form validation

  const handleAddProfile = () => {
    if (!name || !description || !location) {
      setError("Please fill out all fields.");
      return;
    }
    const newProfile = {
      id: profiles.length + 1,
      name,
      description,
      photo,
      location,
    };
    onAddProfile(newProfile);
    resetForm();
  };

  const handleEditProfile = (profileId) => {
    const profileToEdit = profiles.find((profile) => profile.id === profileId);
    setEditingProfileId(profileId);
    setName(profileToEdit.name);
    setDescription(profileToEdit.description);
    setPhoto(profileToEdit.photo);
    setLocation(profileToEdit.location);
  };

  const handleSaveProfile = () => {
    if (!name || !description || !location) {
      setError("Please fill out all fields.");
      return;
    }
    const updatedProfile = {
      id: editingProfileId,
      name,
      description,
      photo,
      location,
    };
    onEditProfile(updatedProfile);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setPhoto("");
    setLocation("");
    setError(""); 
    setEditingProfileId(null);
  };

  const handleDeleteProfile = (profileId) => {
    if (window.confirm("Are you sure you want to delete this profile?")) {
      onDeleteProfile(profileId);
    }
  };

  return (
    <div className="admin-panel">
      <h2>{editingProfileId ? "Edit Profile" : "Add New Profile"}</h2>
      <div className="profile-form">
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          onClick={editingProfileId ? handleSaveProfile : handleAddProfile}
          className="add-profile-btn"
        >
          {editingProfileId ? "Save Changes" : "Add Profile"}
        </button>
        {editingProfileId && (
          <button onClick={resetForm} className="cancel-btn">
            Cancel
          </button>
        )}
      </div>
      <div className="profile-list">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <img src={profile.photo} alt={profile.name} />
            <p>{profile.name}</p>
            <p>{profile.location}</p>
            <button
              onClick={() => handleEditProfile(profile.id)}
              className="edit-btn"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteProfile(profile.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
