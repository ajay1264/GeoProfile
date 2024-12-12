import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const MapComponent = ({ address }) => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (address) {
      // Use a geocoding service like OpenCage or Nominatim to convert address to coordinates
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`)
        .then(response => response.json())
        .then(data => {
          if (data[0]) {
            setCoordinates([data[0].lat, data[0].lon]);
          }
        });
    }
  }, [address]);

  return (
    <MapContainer center={coordinates || [51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {coordinates && (
        <Marker position={coordinates}>
          <Popup>{address}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
