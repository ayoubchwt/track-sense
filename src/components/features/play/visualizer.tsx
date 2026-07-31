"use client";
import { CHUNK_PATTERN, TOTAL_BARS } from "@/lib/utils/visualizer-metadata";
import React, { us } from "react";
import VisualizerBar from "./visualizer-bar";

function Visualizer({
  // audioRef,
  duration,
  currentTime,
}: {
  // audioRef: React.RefObject<HTMLAudioElement | null>;
  duration: number;
  currentTime: number;
}) {
  // const [currentTime, setCurrentTime] = useState(0);
  // const [duration, setDuration] = useState(0);
  // useEffect(() => {
  //   const audio = audioRef.current;
  //   if (!audio) return;
  //   const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
  //   const handleLoadedMetadata = () => setDuration(audio.duration || 0);
  //   audio.addEventListener("timeupdate", handleTimeUpdate);
  //   audio.addEventListener("loadedmetadata", handleLoadedMetadata);
  //   return () => {
  //     audio.removeEventListener("timeupdate", handleTimeUpdate);
  //     audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
  //   };
  // }, [audioRef]);
  const progressRatio = duration > 0 ? currentTime / duration : 0;
  const activeBarCount = Math.ceil(TOTAL_BARS * progressRatio);
  return (
    <div className="flex items-end gap-1">
      {Array.from({ length: TOTAL_BARS }).map((_, index) => {
        const height = CHUNK_PATTERN[index % CHUNK_PATTERN.length];
        const isActive = index < activeBarCount;
        return (
          <VisualizerBar
            key={index}
            height={height}
            isActive={isActive}
          ></VisualizerBar>
        );
      })}
    </div>
  );
}
export default Visualizer;
