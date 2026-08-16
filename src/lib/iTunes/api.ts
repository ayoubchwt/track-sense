import { GameTrack, iTunesTrack } from "@/types/iTunes";
import { getRandomGenreKeyword } from "./genres";

export async function getGameTracks(query: string): Promise<GameTrack[]> {
  const searchTerm = getRandomGenreKeyword(query);
  const response = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&entity=song&limit=100&media=music`,
  );
  if (!response.ok) {
    throw new Error(`iTunes API failed with status ${response.status}`);
  }
  const data = await response.json();
  const tracks = data.results.map((item: iTunesTrack) => {
    return {
      id: item.trackId,
      name: item.trackCensoredName,
      artist: item.artistName,
      previewUrl: item.previewUrl,
    };
  });
  return tracks;
}
