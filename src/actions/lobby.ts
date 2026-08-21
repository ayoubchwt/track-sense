import { getUser } from "@/lib/auth/utils";
import db from "@/lib/db";
import {
  createSessionSchema,
  JoingSessionSchema,
} from "@/lib/validations/lobby";
import { CreateSession, JoinSession } from "@/types/lobby";

export async function createSession(data: CreateSession) {
  const validated = createSessionSchema.safeParse(data);
  if (!validated.success) {
    return { success: false, error: "Invlide form data provided." };
  }
  const { sessionName, sessionCode, rounds, genres } = validated.data;
  try {
    const gameSession = await db.gameSession.create({
      data: {
        sessionName,
        sessionCode,
        rounds,
        genres,
      },
    });
    return { success: true, data: gameSession };
  } catch (error) {
    console.log("Error :", error);
    return { success: false, error: `Failed to create session ${error}` };
  }
}
export async function JoingSession(data: JoinSession) {
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
