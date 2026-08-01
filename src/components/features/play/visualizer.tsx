"use client";
import { CHUNK_PATTERN, TOTAL_BARS } from "@/lib/utils/visualizer-metadata";
import VisualizerBar from "./visualizer-bar";

function Visualizer({
  duration,
  currentTime,
}: {
  duration: number;
  currentTime: number;
}) {
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
