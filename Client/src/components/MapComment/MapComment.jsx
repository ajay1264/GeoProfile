import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapComment.css";

const MapComment = ({ latitude, longitude }) => {
  const mapRef = useRef(null); // Reference for the map container
  const mapInstance = useRef(null); // Reference to store the map instance
  const markerRef = useRef(null); // Reference to store the marker instance

  useEffect(() => {
    // Check if map is already initialized
    if (!mapInstance.current) {
      // Initialize the map
      mapInstance.current = L.map(mapRef.current).setView([latitude, longitude], 10);

      // Add OpenStreetMap tiles to the map
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);
    }

    // If a marker exists, update its position, otherwise, create a new marker
    if (markerRef.current) {
      markerRef.current.setLatLng([latitude, longitude]);
    } else {
      markerRef.current = L.marker([latitude, longitude])
        .addTo(mapInstance.current)
        .bindPopup("Profile Location")
        .openPopup();
    }

  }, [latitude, longitude]); // Re-run when latitude or longitude changes

  return (
    <div className="map-comment">
      <div ref={mapRef} style={{ height: "400px", width: "100%" }}></div>
      <div className="comment-section">
        <h4>Add a Comment</h4>
        <textarea placeholder="Add your comment here" rows="4"></textarea>
        <button className="submit-comment-btn">Submit</button>
      </div>
    </div>
  );
};

export default MapComment;
