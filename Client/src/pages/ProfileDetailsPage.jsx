import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MapComment from "../components/MapComment/MapComment";
import "./ProfileDetailsPage.css";

const ProfileDetailsPage = () => {
  const { id } = useParams();  // Get the profile ID from URL
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const profilesData = [
      {
        id: "1",
        name: "John Doe",
        photo: "https://via.placeholder.com/150",
        description: "Web Developer",
        location: "New York, USA",
        latitude: 40.7128,
        longitude: -74.0060,
      },
      {
        id: "2",
        name: "Jane Smith",
        photo: "https://via.placeholder.com/150",
        description: "Graphic Designer",
        location: "Los Angeles, USA",
        latitude: 34.0522,
        longitude: -118.2437,
      },
      // Add more profiles with different latitudes and longitudes
    ];

    const fetchedProfile = profilesData.find((profile) => profile.id === id);
    
    if (fetchedProfile) {
      setProfile(fetchedProfile);
    }
  }, [id]);

  return (
    <div className="profile-details">
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <img src={profile.photo} alt={profile.name} />
          <p>{profile.description}</p>
          <p>{profile.location}</p>
          <MapComment latitude={profile.latitude} longitude={profile.longitude} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfileDetailsPage;
