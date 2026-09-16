import Competitors from "@/components/features/play/competitors";
import PlayProps from "@/components/features/play/play-props";
import SongPlayer from "@/components/features/play/song-player";
import { verifyUser } from "@/lib/auth/utils";
async function Play({ params }: { params: Promise<{ id: string }> }) {
  await verifyUser(true);
  const { id } = await params;
  console.log("ID : ", id);
  // useEffect(() => {
  //   async function fetchGameTracks() {
  //     const response = await fetch("/api/game/tracks?query=rock");
  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.error || "Failed to fetch tracks");
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //   }
  //   fetchGameTracks();
  // }, []);
  return (
    <div className="flex flex-col items-center justify-around flex-1 max-w-5xl mx-auto w-full">
      <PlayProps></PlayProps>
      <SongPlayer></SongPlayer>
      <Competitors></Competitors>
    </div>
  );
}
export default Play;
