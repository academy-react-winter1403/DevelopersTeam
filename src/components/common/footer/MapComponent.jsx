import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

 const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = ({ isModalOpen }) => {
  const position = [36.598083, 53.064639];

  return (
    <div
      className={`map-container ${
        isModalOpen ? "map-dimmed" : ""
      } rounded-xl border-2 border-gray-200 h-full dark:border-gray-700 overflow-hidden shadow-md bg-white dark:bg-gray-900`}
    >
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-[300px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon} />
      </MapContainer>

      <div className="p-4 text-sm text-center text-gray-800 dark:text-gray-300">
        ایران استان مازندران، شهر ساری جاده فرح‌آباد
      </div>
    </div>
  );
};

export default MapComponent;
