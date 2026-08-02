"use client";
import { useRef, useState } from "react";
import Visualizer from "./visualizer";

function SongPlayer() {
  const mockAudioUrl =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const syncData = (audio: HTMLAudioElement) => {
    if (audio.duration && audio.duration != duration)
      setDuration(audio.duration);
    setCurrentTime(audio.currentTime);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="text-sm font-light text-(--text-light)">NOW PLAYING</h2>
        <h1 className="text-3xl font-semibold text-(--text)">
          ?????? — ??????
        </h1>
        <p className="text-xs font-light text-(--text-light)">
          12s snippet · from Spotify
        </p>
        <audio
          src={mockAudioUrl}
          ref={audioRef}
          controls
          loop
          autoPlay
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onPlay={(e) => syncData(e.currentTarget)}
          onCanPlay={(e) => syncData(e.currentTarget)}
          className="hidden"
        ></audio>
        <Visualizer currentTime={currentTime} duration={duration}></Visualizer>
      </div>
    </div>
  );
}
export default SongPlayer;
