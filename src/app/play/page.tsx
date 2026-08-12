"use client";
import ProtectedRoute from "@/components/features/auth/protected-route";
import Competitors from "@/components/features/play/competitors";
import PlayProps from "@/components/features/play/play-props";
import SongPlayer from "@/components/features/play/song-player";
function Play() {
  return (
    <ProtectedRoute redirectTo={"/auth/login"}>
      <div className="flex flex-col items-center justify-around flex-1 max-w-5xl mx-auto w-full">
        <PlayProps></PlayProps>
        <SongPlayer></SongPlayer>
        <Competitors></Competitors>
      </div>
    </ProtectedRoute>
  );
}
export default Play;
