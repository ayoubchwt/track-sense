// import { HandleError } from "@/lib/error/error-handler";
// import { getGameTracks } from "@/lib/iTunes/api";
// import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const query = searchParams.get("query") || "pop";
//   try {
//     const tracks = await getGameTracks(query);
//     return NextResponse.json({ tracks });
//   } catch (error: unknown) {
//     console.log("Error :", error);
//     return NextResponse.json(HandleError(error));
//   }
// }
