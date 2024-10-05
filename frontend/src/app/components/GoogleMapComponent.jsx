import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "400px",
  width: "800px",
};

const fenerCenter = {
  lat: 40.9883,
  lng: 29.0334,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={fenerCenter}
        zoom={15}
      >
        <google.maps.marker.AdvancedMarkerElement
          position={fenerCenter}
          map={map}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
