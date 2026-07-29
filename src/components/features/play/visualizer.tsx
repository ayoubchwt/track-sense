"use client";
import { TOTAL_BARS } from "@/lib/utils/visualizer-metadata";
import React, { useEffect, useState } from "react";

function Visualizer({
  audioRef,
}: {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [audioRef]);
  const progressRatio = duration > 0 ? currentTime / duration : 0;
  const activeBarCount = Math.floor(TOTAL_BARS * progressRatio);
  return <div></div>;
}
export default Visualizer;
