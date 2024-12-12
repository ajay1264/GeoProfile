import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MapComponent from '../components/MapComment/MapComment.jsx';

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch profile by ID
    const fetchProfile = async () => {
      const response = await fetch(`/api/profiles/${id}`); // Adjust with your API endpoint
      const data = await response.json();
      setProfile(data);
    };

    fetchProfile();
  }, [id]);

  return (
    <div>
      {profile ? (
        <>
          <h1>{profile.name}</h1>
          <img src={profile.photo} alt={profile.name} />
          <p>{profile.description}</p>
          <MapComponent address={profile.address} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfileDetails;
