import React from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} className="profile-img" />
      <div className="profile-details">
        <h3 className="profile-name">{profile.name}</h3>
        <p className="profile-description">{profile.description}</p>
        <Link to={`/profile/${profile.id}`} className="view-profile-btn">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
