-- CreateTable
CREATE TABLE "gameSession" (
    "id" TEXT NOT NULL,
    "sessionCode" TEXT NOT NULL,
    "sessionName" TEXT NOT NULL,
    "rounds" INTEGER NOT NULL,
    "genres" TEXT NOT NULL,
    "isAlive" BOOLEAN NOT NULL DEFAULT true,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "gameSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessionPlayer" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gameSessionId" TEXT NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sessionPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gameSession_sessionCode_key" ON "gameSession"("sessionCode");

-- CreateIndex
CREATE UNIQUE INDEX "sessionPlayer_userId_gameSessionId_key" ON "sessionPlayer"("userId", "gameSessionId");

-- AddForeignKey
ALTER TABLE "gameSession" ADD CONSTRAINT "gameSession_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessionPlayer" ADD CONSTRAINT "sessionPlayer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessionPlayer" ADD CONSTRAINT "sessionPlayer_gameSessionId_fkey" FOREIGN KEY ("gameSessionId") REFERENCES "gameSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;
