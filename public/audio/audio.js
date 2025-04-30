<audio
  ref={audioRef}
  src={`/audio/${audioSrc}.mp3`}
  onError={() => alert(`فایل صوتی "${audioSrc}.mp3" پیدا نشد.`)}
  preload="auto"
></audio>
