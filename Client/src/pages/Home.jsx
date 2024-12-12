import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard/ProfileCard.jsx';

const Home = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch profiles from API or use sample data
    const fetchProfiles = async () => {
      const response = await fetch('/api/profiles'); // Adjust with your API endpoint
      const data = await response.json();
      setProfiles(data);
    };

    fetchProfiles();
  }, []);

  return (
    <div>
      <h1>Profiles</h1>
      <div className="profile-list">
        {profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default Home;
