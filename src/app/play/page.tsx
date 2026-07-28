import Competitors from "@/components/features/play/competitors";
import PlayProps from "@/components/features/play/play-props";
import SongPlayer from "@/components/features/play/song-player";

function Play() {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <PlayProps></PlayProps>
      <SongPlayer></SongPlayer>
      <Competitors></Competitors>
    </div>
  );
}
export default Play;
