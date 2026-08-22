"use server";
import { getUser } from "@/lib/auth/utils";
import db from "@/lib/db";
import {
  createSessionSchema,
  JoingSessionSchema,
} from "@/lib/validations/lobby";
import { type CreateSession, type JoinSession } from "@/types/lobby";

export async function createSession(data: CreateSession) {
  const user = await getUser();
  if (!user)
    return {
      success: false,
      error: "No authenticed has been done",
    };
  const validated = createSessionSchema.safeParse(data);
  if (!validated.success) {
    return { success: false, error: "Invlide form data provided." };
  }
  const { sessionName, sessionCode, rounds, genres } = validated.data;
  try {
    const gameSession = await db.gameSession.create({
      data: {
        sessionName: sessionName,
        sessionCode: sessionCode,
        rounds: rounds,
        genres: genres,
        ownerId: user.id,
      },
    });
    return { success: true, data: gameSession };
  } catch (error) {
    console.log("Error :", error);
    return { success: false, error: `Failed to create session ${error}` };
  }
}

export async function joinSession(data: JoinSession) {
  const user = await getUser();
  if (!user) return { success: false, error: "No authenticed has been done" };
  const validated = JoingSessionSchema.safeParse(data);
  if (!validated.success) {
    return { success: false, error: "Invalid form provided data." };
  }
  const { sessionCode } = validated.data;
  try {
    const gameSession = await db.gameSession.findUnique({
      where: {
        sessionCode: sessionCode,
      },
    });
    if (!gameSession)
      return { success: false, error: "Game session cannot be found." };
    if (!gameSession.isAlive)
      return {
        success: false,
        error: "Game session got closed by the owner",
      };
    const sessionPlayer = await db.sessionPlayer.create({
      data: {
        userId: user.id,
        gameSessionId: gameSession?.id,
      },
    });
    return { success: true, data: sessionPlayer };
  } catch (error) {
    console.log("Error", error);
    return { success: false, error: `Failed to joing session ${error}` };
  }
}

export async function endSession() {
  const user = await getUser();
  if (!user)
    return {
      success: false,
      error: "No authenticed has been done",
    };
  try {
    const gameSession = await db.gameSession.updateMany({
      where: { ownerId: user.id, isAlive: true },
      data: { isAlive: false },
    });
    return { success: true, data: gameSession };
  } catch (error) {
    console.log("Error :", error);
    return { success: false, error: `Failed to end session ${error}` };
  }
}
