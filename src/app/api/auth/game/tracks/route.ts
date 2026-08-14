import { HandleError } from "@/lib/error/error-handler";
import { getGameTracks } from "@/lib/spotify/api";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") || "genre:pop";
  const limit = Number(searchParams.get("limit")) || 10;
  try {
    const tracks = await getGameTracks(query, limit);
    return NextResponse.json({ tracks });
  } catch (error: unknown) {
    return NextResponse.json(HandleError(error));
  }
}
