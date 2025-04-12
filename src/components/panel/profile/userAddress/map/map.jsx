// import React, { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// // import { useProfileDetail } from "../../../core/services/api/dashboard/profile/profileDetail/ProfileDetail.api";
// // import { useProfileUpdate } from "../../../core/services/api/dashboard/profile/profileUpdate/ProfileUpdate.api";

// function Map() {
//   return (
//     <div className="h-[500px] z-10 w-full py-6">
//       <MapContainer
//         className="h-full rounded-2xl w-full"
//         center={[36.569217971443656, 53.07061672210694]}
//         zoom={10}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <LocationMarkers />
//       </MapContainer>
//     </div>
//   );
// }

// export default Map;

// function LocationMarkers() {
//   const queryClient = useQueryClient();

//   const getProfile = async () => {
//     const res = await http.get(`/SharePanel/GetProfileInfo`);
//     return res;
//   };
//   const { data } = useQuery({
//     queryKey: ["profile"],
//     queryFn: getProfile,
//   });

//   const updateProfile = async (userData) => {
//     const formData = new FormData();
//     formData.append("FName", userData.fname);
//     formData.append("LName", userData.lname);
//     formData.append("UserAbout", userData.aboutMe);
//     formData.append("NationalCode", userData.code);
//     formData.append("BirthDay", userData.birthday);
//     formData.append("Gender", userData.gender);
//     formData.append("HomeAdderess", userData.address);
//     formData.append("Latitude", e.latlng.lat.toString());
//     formData.append("Longitude", e.latlng.lng.toString());

//     const res = await http.put(`/SharePanel/UpdateProfileInfo`, formData);
//     return res;
//   };

//   const {
//     mutate: mutateUpdate,
//     isLoading,
//     isError,
//     isSuccess,
//   } = useMutation({
//     mutationFn: updateProfile,
//     onSuccess: () => {
//       queryClient.invalidateQueries(["profile"]);
//       toast.success("اطلاعات با موفقیت تغییر یافت");
//     },
//   });

//   const [markers, setMarkers] = useState(
//     data.latitude && data.longitude
//       ? [[data.latitude, data.longitude]]
//       : [[0, 0]]
//   );

//   const map = useMapEvents({
//     click(e) {
//       setMarkers([[e.latlng.lat, e.latlng.lng]]);
//         const form = new FormData();
//         form.append("LName", data.lName);
//         form.append(
//           "UserAbout",
//           data.UserAbout ? data.UserAbout : "--------------------"
//         );
//         form.append("FName", data.fName);
//         if (data.linkdinProfile)
//           form.append("LinkdinProfile", data.linkdinProfile);
//         if (data.telegramLink) form.append("TelegramLink", data.telegramLink);
//         form.append("ReceiveMessageEvent", data.receiveMessageEvent.toString());
//         form.append("HomeAdderess", data.homeAdderess);
//         form.append("NationalCode", data.nationalCode);
//         form.append("Gender", data.gender.toString());
//         form.append("BirthDay", data.birthDay);
//         form.append("Latitude", e.latlng.lat.toString());
//         form.append("Longitude", e.latlng.lng.toString());
//         console.log(data);
//         update.mutate(form);
//     },
//     locationfound(e) {
//       map.flyTo(e.latlng, 13);
//     },
//     load() {
//       map.locate();
//     },
//   });

//   map.locate();

//   useEffect(() => {
//     map.locate();
//     try {
//       if (navigator.geolocation) {
//         navigator.geolocation.watchPosition((e) => {
//           map.flyTo([e.coords.latitude, e.coords.longitude]);
//           console.log("map success");
//         });
//       } else {
//         console.log("Geolocation is not supported by this browser.");
//       }
//     } catch (error) {
//       console.log("map ERR");
//     }
//   }, []);

//   return (
//     <React.Fragment>
//       {markers.map((marker) => (
//         <Marker position={marker}></Marker>
//       ))}
//     </React.Fragment>
//   );
// }

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import http from "./../../../../../core/services/interceptor";

// import { useProfileDetail } from "../../../core/services/api/dashboard/profile/profileDetail/ProfileDetail.api";
// import { useProfileUpdate } from "../../../core/services/api/dashboard/profile/profileUpdate/ProfileUpdate.api";

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
  const getProfile = async () => {
    const res = await http.get(`/SharePanel/GetProfileInfo`);
    return res;
  };
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const { mutate: mutateUpdate } = useMutation({
    mutationFn: (e) => http.put(`/SharePanel/UpdateProfileInfo`, e),
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
      toast.success("اطلاعات با موفقیت تغییر یافت");
    },
  });

  //   const data = profile.data?.data;
  //   const update = useProfileUpdate();
  const [markers, setMarkers] = useState(
    data.latitude && data.longitude
      ? [[data.latitude, data.longitude]]
      : [[0, 0]]
  );

  const map = useMapEvents({
    click(e) {
      setMarkers([[e.latlng.lat, e.latlng.lng]]);
      const form = new FormData();
      form.append("LName", data.lName);
      form.append(
        "UserAbout",
        data.UserAbout ? data.UserAbout : "--------------------"
      );
      form.append("FName", data.fName);
      if (data.linkdinProfile)
        form.append("LinkdinProfile", data.linkdinProfile);
      if (data.telegramLink) form.append("TelegramLink", data.telegramLink);
      form.append("ReceiveMessageEvent", data.receiveMessageEvent.toString());
      form.append("HomeAdderess", data.homeAdderess);
      form.append("NationalCode", data.nationalCode);
      form.append("Gender", data.gender.toString());
      form.append("BirthDay", data.birthDay);
      form.append("Latitude", e.latlng.lat.toString());
      form.append("Longitude", e.latlng.lng.toString());
      console.log(data);
      mutateUpdate(form);
    },
    locationfound(e) {
      map.flyTo(e.latlng, 13);
    },
    load() {
      map.locate();
    },
  });

  map.locate();

  useEffect(() => {
    map.locate();
    try {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition((e) => {
          map.flyTo([e.coords.latitude, e.coords.longitude]);
          console.log("map success");
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    } catch (error) {
      console.log("map ERR");
    }
  }, []);

  return (
    <React.Fragment>
      {markers.map((marker) => (
        <Marker position={marker}></Marker>
      ))}
    </React.Fragment>
  );
}
