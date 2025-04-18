import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import http from "./../../../../../core/services/interceptor";
import toast from "react-hot-toast";

function Map() {
  return (
    <div className="h-[500px] z-10 w-full py-6">
      <MapContainer
        className="h-full rounded-2xl w-full"
        center={[36.569217971443656, 53.07061672210694]}
        zoom={10}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarkers />
      </MapContainer>
    </div>
  );
}

export default Map;

function LocationMarkers() {
  const queryClient = useQueryClient();

  const getProfile = async () => {
    const res = await http.get(`/SharePanel/GetProfileInfo`);
    return res;
  };

  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const { mutate: mutateUpdate } = useMutation({
    mutationFn: (formData) =>
      http.put(`/SharePanel/UpdateProfileInfo`, formData),
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
      toast.success("موقعیت جدید با موفقیت ذخیره شد");
    },
    onError: () => {
      toast.error("خطا در ذخیره موقعیت جدید");
    },
  });

  const [markers, setMarkers] = useState(
    data?.latitude && data?.longitude
      ? [[data.latitude, data.longitude]]
      : [[0, 0]]
  );

  const map = useMapEvents({
    click(e) {
      const newPosition = [e.latlng.lat, e.latlng.lng];
      setMarkers([newPosition]);

      const formData = new FormData();
      formData.append("Latitude", e.latlng.lat.toString());
      formData.append("Longitude", e.latlng.lng.toString());

      if (data) {
        formData.append("FName", data.fName || "");
        formData.append("LName", data.lName || "");
        formData.append("UserAbout", data.userAbout || "");
        formData.append("NationalCode", data.nationalCode || "");
        formData.append("BirthDay", data.birthDay || "");
        formData.append("Gender", data.gender?.toString() || "true");
        formData.append("HomeAdderess", data.homeAdderess || "");
        formData.append("TelegramLink", data.telegramLink || "");
        formData.append("LinkdinProfile", data.linkdinProfile || "");
      }

      mutateUpdate(formData);
    },
    locationfound(e) {
      map.flyTo(e.latlng, 13);
    },
    load() {
      map.locate();
    },
  });

  useEffect(() => {
    map.locate();
    if (data?.latitude && data?.longitude) {
      setMarkers([[data.latitude, data.longitude]]);
      map.flyTo([data.latitude, data.longitude], 13);
    }

    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          // map.flyTo([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, [data, map]);

  return (
    <>
      {markers.map((marker, index) => (
        <Marker key={index} position={marker} />
      ))}
    </>
  );
}
