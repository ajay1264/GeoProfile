import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileList.css';

const ProfileList = ({ profiles, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <div key={profile.id} className="profile-card">
          <img src={profile.photo} alt={profile.name} />
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <Link to={`/profile/${profile.id}`} className="summary-button">Summary</Link>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
