-- CreateTable
CREATE TABLE "CompletedExercise" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "chapterId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "earnedXp" INTEGER NOT NULL DEFAULT 0,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompletedExercise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompletedExercise_userId_chapterId_exerciseId_key" ON "CompletedExercise"("userId", "chapterId", "exerciseId");

-- AddForeignKey
ALTER TABLE "CompletedExercise" ADD CONSTRAINT "CompletedExercise_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "CourseChapters"("chapterId") ON DELETE CASCADE ON UPDATE CASCADE;
