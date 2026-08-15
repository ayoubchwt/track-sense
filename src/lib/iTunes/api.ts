import { GameTrack, iTunesTrack } from "@/types/iTunes";

export async function getGameTracks(
  query: string,
  limit: number,
): Promise<GameTrack[]> {
  const response = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=${limit * 2}`,
  );
  if (!response.ok) {
    throw new Error(`iTunes API failed with status ${response.status}`);
  }
  const data = await response.json();
  if (data.resultCount < limit) getGameTracks(query, limit);
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
