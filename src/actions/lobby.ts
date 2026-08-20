import db from "@/lib/db";
import { createSessionSchema } from "@/lib/validations/lobby";
import { CreateSession } from "@/types/lobby";

export async function createSession(data: CreateSession) {
  const validated = createSessionSchema.safeParse(data);
  if (!validated.success) {
    return { success: false, error: "Invlide form data provided." };
  }
  const { sessionName, sessionCode, rounds, genres } = validated.data;
  try {
    const session = await db.lobby.create({
      data: {
        sessionName,
        sessionCode,
        rounds,
        genres,
      },
    });
    return { success: true, data: session };
  } catch (error) {
    console.log("Error :", error);
    return { success: false, error: `Failed to create session ${error}` };
  }
}
