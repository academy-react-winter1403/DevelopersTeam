import React, { useRef } from "react";

const SpeakBtn = ({ audioSrc, text }) => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // توقف اگر در حال اجرا بود
      audioRef.current.currentTime = 0; // از اول پخش شود
      audioRef.current.play().catch(e => {
        alert('پخش صدا امکان‌پذیر نیست. یکی از دلایل: محدودیت مرورگر، تنظیمات صدای دستگاه یا وجود نداشتن فایل صوتی.');
      });
    }
  };

  return (
    <button
      type="button"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        marginRight: 6,
        padding: 0,
        fontSize: 18,
        verticalAlign: "middle",
      }}
      title={`پخش صوت: ${text}`}
      onClick={playAudio}
    >
      🔊
      <audio
        ref={audioRef}
        src={`/audio/${audioSrc}.mp3`}
        preload="auto"
        onError={() => alert(`فایل صوتی "/audio/${audioSrc}.mp3" پیدا نشد.`)}
      ></audio>
    </button>
  );
};

export default SpeakBtn;
