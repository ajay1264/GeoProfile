import React from "react";
import { Link } from "react-router-dom";  // Import Link component
import ProfileCard from "../components/ProfileCard/ProfileCard";
import "./Home.css";

const Home = ({ profiles }) => {
  return (
    <div className="home">
      <h1>Profile Explorer</h1>
      <div className="profiles-container">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile}>
            <Link to={`/profile/${profile.id}`}>View Profile</Link> {/* Link to Profile Details */}
          </ProfileCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
