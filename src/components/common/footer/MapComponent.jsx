import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const [mapError, setMapError] = useState(false); // مدیریت خطا
  const API_KEY = "YOUR_API_KEY"; // جایگزین کردن YOUR_API_KEY با کلید API معتبر

  // مختصات مربوط به آدرس مشخص‌شده
  const center = { lat: 36.655686, lng: 53.086797 };

  // تنظیم استایل نقشه
  const mapStyles = {
    width: "100%",
    height: "300px",
    borderRadius: "12px",
    border: "1px solid lightgray",
  };

  // هندل کردن خطا در بارگذاری نقشه
  const handleError = () => {
    setMapError(true);
  };

  return (
    <div className="map-container">
      {/* نمایش پیام خطا در صورت بروز مشکل */}
      {mapError ? (
        <div className="rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center p-4">
          <p className="text-red-500 text-sm font-bold">
            مشکل در بارگذاری نقشه. لطفاً کلید API را بررسی کنید.
          </p>
        </div>
      ) : (
        // بارگذاری نقشه با استفاده از LoadScript
        <LoadScript googleMapsApiKey={API_KEY} onError={handleError}>
          <GoogleMap mapContainerStyle={mapStyles} center={center} zoom={15}>
            {/* نشانگر (Marker) برای لوکیشن مشخص‌شده */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      )}

      {/* نمایش توصیف آدرس زیر نقشه */}
      <div className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">
        <p>
          استان مازندران، علی‌وَک، جاده فرح‌آباد (Farah Abad Road)، H3W7+XV7،
          ایران
        </p>
      </div>
    </div>
  );
};

export default MapComponent;
