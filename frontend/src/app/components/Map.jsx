// use client
import dynamic from "next/dynamic";
import React from "react";

const GoogleMapComponent = dynamic(() => import("./GoogleMapComponent"), {
  ssr: false,
});

const Map = () => {
  return (
    <>
      <h2>Google Maps</h2>
      <GoogleMapComponent />
    </>
  );
};

export default Map;
