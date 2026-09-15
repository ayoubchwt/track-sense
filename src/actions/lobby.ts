"use server";
import { getUser } from "@/lib/auth/utils";
import db from "@/lib/db";
import { Prisma } from "@/lib/generated/prisma/client";
import { PRISMA_ERRORS } from "@/lib/utils/prisma-utils";
import {
  createSessionSchema,
  JoingSessionSchema,
} from "@/lib/validations/lobby";
import {
  publicSession,
  type CreateSession,
  type JoinSession,
} from "@/types/lobby";

export async function createSessionAction(data: CreateSession) {
  const user = await getUser();
  if (!user) return { success: false, error: "Authentication required." };

  const validated = createSessionSchema.safeParse(data);
  if (!validated.success) {
    return { success: false, error: "Invalid form data provided." };
  }
  const { sessionName, sessionCode, rounds, genres, isPublic } = validated.data;
  try {
    const gameSession = await db.gameSession.create({
      data: {
        sessionName: sessionName,
        sessionCode: sessionCode,
        rounds: rounds,
        genres: genres,
        isPublic: isPublic,
        ownerId: user.id,
        sessionPlayers: {
          create: {
            userId: user.id,
          },
        },
      },
      include: {
        sessionPlayers: true,
      },
    });
    return { success: true, data: gameSession };
  } catch (error) {
    console.log("Error :", error);
    return { success: false, error: `Failed to create session ${error}` };
  }
}

export async function joinSessionAction(data: JoinSession) {
  const user = await getUser();
  if (!user) return { success: false, error: "Authentication required." };
  const validated = JoingSessionSchema.safeParse(data);
  if (!validated.success)
    return { success: false, error: "Invalid form provided data." };
  try {
    let gameSession = null;
    if (!data.isPublic) {
      gameSession = await db.gameSession.findUnique({
        where: {
          sessionCode: validated.data.sessionCode,
          isPublic: false,
        },
      });
    } else {
      gameSession = await db.gameSession.findUnique({
        where: {
          id: data.id,
          isPublic: true,
        },
      });
    }
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
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === PRISMA_ERRORS.UNIQUE_CONSTRAINT
    )
      return { success: false, error: "You are already in this session." };
  }
  return { success: false, error: "Failed to join the session" };
}

export async function endSessionAction() {
  const user = await getUser();
  if (!user) return { success: false, error: "Authentication required." };
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

export async function fetchPublicSessionsAction(page: number = 1) {
  const PAGE_SIZE = 5;
  const user = await getUser();
  if (!user) return { success: false, error: "Authentication required." };
  const currentPage = Math.max(1, page);
  const skip = (currentPage - 1) * PAGE_SIZE;
  try {
    const [sessions, totalSessions] = await Promise.all([
      await db.gameSession.findMany({
        where: {
          isPublic: true,
        },
        take: PAGE_SIZE,
        skip: skip,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          sessionName: true,
          rounds: true,
          genres: true,
          owner: {
            select: {
              name: true,
            },
          },
        },
      }),
      db.gameSession.count({
        where: {
          isPublic: true,
        },
      }),
    ]);
    if (!sessions)
      return { success: false, error: "there is no sessions available" };
    const formattedSessions: publicSession[] = sessions.map((session) => ({
      id: session.id,
      sessionName: session.sessionName,
      genres: session.genres,
      rounds: session.rounds,
      ownerName: session.owner.name,
    }));
    return {
      success: true,
      data: {
        sessions: formattedSessions,
        totalSessions: Math.ceil(totalSessions / PAGE_SIZE),
        currentPage,
      },
    };
  } catch (error) {
    console.log("error", error);
    return { success: false, error: `Failed to get sessions ${error}` };
  }
}

export async function verifyUserJoined(sessionId: string) {
  const user = await getUser();
  if (!user) return { success: false, error: "Authentication required." };
  const gameSession = await db.gameSession.findMany({
    where: {
      id: sessionId,
      sessionPlayers: {
        some: {
          userId: user.id,
        },
      },
    },
  });
  if (!gameSession)
    return {
      success: false,
      error: "Failed to join session. please try again",
    };
  return { success: true, data: gameSession };
}
