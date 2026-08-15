import "server-only";
import { GameTrack, TokenResponse } from "@/types/spotify";

// need this to get the token for the request
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
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  };
  const response = await fetch(
    "https://accounts.spotify.com/api/token",
    requestionOptions,
  );
  const data: TokenResponse = await response.json();
  return data.access_token;
}
// getting track by genre
export async function getGameTracks(
  query: string,
  limit: number,
): Promise<GameTrack[]> {
  const AuthorizationToken = await sendAuthorizationRequest();
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${AuthorizationToken}`,
      },
    },
  );
  if (!response.ok) {
    console.log(response.json().catch(() => null));
    return [];
  }
  const data = await response.json();
  const tracksWithPerview = data.tracks.items.filter(
    (track: GameTrack) => track.preview_url !== null,
  );
  if (!tracksWithPerview.length) return getGameTracks(query, limit);
  return tracksWithPerview;
}
// getting track by playlist : TODO
