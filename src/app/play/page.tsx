import Competitors from "@/components/features/play/competitors";
import PlayProps from "@/components/features/play/play-props";
import SongPlayer from "@/components/features/play/song-player";

function Play() {
  return (
    <div className="flex flex-col items-center justify-around flex-1 max-w-5xl mx-auto w-full">
      <PlayProps></PlayProps>
      <SongPlayer></SongPlayer>
      <Competitors></Competitors>
    </div>
  );
}
export default Play;
