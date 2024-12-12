import React from "react";
import { Link } from "react-router-dom";
import MapComment from "../MapComment/MapComment";
import "./ProfileDetails.css";

const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details-container">
      <div className="profile-details">
        <h2>{profile.name}</h2>
        <img src={profile.photo} alt={profile.name} className="profile-img" />
        <p className="profile-description">{profile.description}</p>
        <p className="profile-location">{profile.location}</p>
        <Link to="/" className="back-btn">
          Back to Home
        </Link>
      </div>
      <MapComment latitude={profile.latitude} longitude={profile.longitude} />
    </div>
  );
};

export default ProfileDetails;
