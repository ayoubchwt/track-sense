import { GameTrack, TokenResposne } from "@/types/sporify";

export async function sendAuthorizationRequest() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const AuthBuffer = Buffer.from(client_id + ":" + client_secret).toString(
    "base64",
  );
  if (!client_id || !client_secret)
    throw new Error("Missing Spotify credentials");
  const requestionOptions = {
    method: "POST",
    headers: {
      Authorization: `Basic ${AuthBuffer}`,
    },
  };
  const response = await fetch(
    "https://accounts.spotify.com/api/token",
    requestionOptions,
  );
  const data: TokenResposne = await response.json();
  return data.access_token;
}
export async function getGameTracks(
  query: string,
  limit: number,
): Promise<GameTrack[]> {
  const AuthorizationToken = sendAuthorizationRequest();
  const response = await fetch(
    `https://api.spotify.com/v1/search/search?q=${encodeURIComponent(query)}&type=track&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer $${AuthorizationToken}`,
      },
    },
  );
  const data = await response.json();
  const tracksWithPerview = data.tracks.items.filter(
    (track: GameTrack) => track.preview_url !== null,
  );
  if (!tracksWithPerview.lengh) return getGameTracks(query, limit);
  return tracksWithPerview;
}
