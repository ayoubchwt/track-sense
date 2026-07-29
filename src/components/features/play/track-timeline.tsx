"use client";
import { useEffect, useState } from "react";
function TrackTimeline({
  audioRef,
}: {
  audioRef?: React.RefObject<HTMLAudioElement | null>;
}) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!audioRef) return;
    const audio = audioRef.current;
    if (!audio) return;
    const handleTimeUpdate = () => {
      if (audio.duration)
        setProgress((audio.currentTime / audio.duration) * 100);
    };
    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
  }, [audioRef]);

  return (
    <div className="flex items-center justify-center gap-2 w-50">
      <p className="text-sm font-light">00:07</p>
      <div className="h-1 w-full bg-(--border-dark) flex items-center justify-start overflow-hidden rounded-full">
        <div
          className="h-full bg-(--text)"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
export default TrackTimeline;
