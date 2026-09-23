"use server";
import { getUser } from "@/lib/auth/utils";
import db from "@/lib/db";

// mid-play session management

export async function quitSession(sessionId: string) {
  const user = await getUser();
  if (!user) return { success: false, error: "Authentication required." };
  const sessionPlayer = await db.sessionPlayer.updateMany({
    where: {
      gameSessionId: sessionId,
      userId: user.id,
    },
    data: {
      isActive: false,
    },
  });
  if (!sessionPlayer)
    return {
      success: false,
      error: "Failed to quit the session. please try again",
    };
  return { sucess: true, data: sessionPlayer };
}

export async function endSession(sessionId: string) {
  const user = await getUser();
  if (!user) return { success: false, error: "Authentication required." };
  const [gameSession, players] = await Promise.all([
    db.gameSession.updateMany({
      where: {
        id: sessionId,
        ownerId: user.id,
      },
      data: {
        isAlive: false,
      },
    }),
    db.sessionPlayer.updateMany({
      where: {
        gameSessionId: sessionId,
      },
      data: {
        isActive: false,
      },
    }),
  ]);
  if (!gameSession || !players)
    return { success: false, error: "Error ending the session." };
  return { success: true, data: gameSession };
}
