import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getCoordinatesFromAddress } from "@/lib/map";
import L from "leaflet";

export default function MyMap() {
  const [coordinates, setCoordinates] = useState({
    lat: 41.0082,
    lon: 28.9784,
  });
  const [loading, setLoading] = useState(true);
  const address =
    "Fenerbahçe Mahallesi, Fener Kalamış Caddesi, İstanbul, Türkiye";

  // Dynamic contact information
  const contactInfo = {
    email: "info@viviency.com",
    phone: "+90 533 230 19 59",
  };

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const coords = await getCoordinatesFromAddress(address);
        setCoordinates(coords);
      } catch (error) {
        console.error("Coordinates could not be fetched:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinates();
  }, [address]);

  const customMarkerIcon = new L.Icon({
    iconUrl: "/favicon.png",
    iconSize: [38, 38],
    iconAnchor: [22, 38],
    popupAnchor: [0, -40],
  });

  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading map...</div>;
  }

  return (
    <div id = "my-map" className=" w-[85%] mx-auto flex rounded-lg overflow-hidden mb-12">
      {/* Contact Information Section */}
      <div className="contentContact w-[35%] flex flex-col gap-6 p-6 bg-white">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
          Fancy a Visit
        </h1>
        <p className="text-gray-600">
          Viviency Medya Ajansı <br />
          Fenerbahçe Mahallesi <br />
          Fener Kalamış Caddesi <br />
          No: 72b, <br />
          Çınarlı Apt. Kat: 1 Daire: 7 <br />
          Kadıköy/İSTANBUL
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
          Get in Touch
        </h1>
        <p className="text-gray-600">
          Email: <span className="font-semibold">{contactInfo.email}</span>
        </p>
        <p className="text-gray-600">
          Phone: <span className="font-semibold">{contactInfo.phone}</span>
        </p>
      </div>

      {/* Map Section */}
      <div className="w-[65%] z-0">
        <MapContainer
          center={[coordinates.lat, coordinates.lon]}
          zoom={13}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={[coordinates.lat, coordinates.lon]}
            icon={customMarkerIcon}
          >
            <Popup>
              <div className="text-lg font-bold text-gray-800">
                Bize ulaşın!
              </div>
              <div className="text-md text-gray-600">
                Fenerbahçe Mahallesi, Fener Kalamış Caddesi No: 72b, Çınarlı
                Apt. Kat: 1 Daire: 7
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
