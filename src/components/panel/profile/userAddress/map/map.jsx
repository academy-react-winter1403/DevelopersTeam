import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import http from "./../../../../../core/services/interceptor";
import toast from "react-hot-toast";

function Map({ onAddressChange }) {
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
        <LocationMarkers onAddressChange={onAddressChange} />
      </MapContainer>
    </div>
  );
}

function LocationMarkers({ onAddressChange }) {
  const queryClient = useQueryClient();
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);

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

  const getAddressFromCoordinates = async (lat, lng) => {
    setIsLoadingAddress(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      if (data.display_name) {
        onAddressChange(data.display_name);
      } else {
        onAddressChange("آدرس یافت نشد");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      onAddressChange("خطا در دریافت آدرس");
    } finally {
      setIsLoadingAddress(false);
    }
  };

  const map = useMapEvents({
    async click(e) {
      const newPosition = [e.latlng.lat, e.latlng.lng];
      setMarkers([newPosition]);

      await getAddressFromCoordinates(e.latlng.lat, e.latlng.lng);

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
      getAddressFromCoordinates(data.latitude, data.longitude);
    }

    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {},
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

const UserAddress = () => {
  const [address, setAddress] = useState("");

  return (
    <div className="w-full mb-10">
      <div className="ml-10 rounded-2xl mt-2 w-full px-3">
        <Map onAddressChange={setAddress} />
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          {address ? (
            <p className="text-sm">
              <strong>آدرس :</strong> {address}
            </p>
          ) : (
            <p className="text-sm text-gray-500">
              روی نقشه کلیک کنید تا آدرس انتخاب شود
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAddress;
