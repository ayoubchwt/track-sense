"use client";
import GuardRoute from "@/components/features/auth/guard-route";
import Competitors from "@/components/features/play/competitors";
import PlayProps from "@/components/features/play/play-props";
import SongPlayer from "@/components/features/play/song-player";
import { useEffect } from "react";
function Play() {
  useEffect(() => {
    async function fetchGameTracks() {
      const response = await fetch("/api/game/tracks?query=rock");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch tracks");
      }
      const data = await response.json();
      console.log(data);
    }
    fetchGameTracks();
  }, []);
  return (
    <GuardRoute isProtected={true} redirectTo={"/auth/login"}>
      <div className="flex flex-col items-center justify-around flex-1 max-w-5xl mx-auto w-full">
        <PlayProps></PlayProps>
        <SongPlayer></SongPlayer>
        <Competitors></Competitors>
      </div>
    </GuardRoute>
  );
}
export default Play;
