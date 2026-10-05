-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('BEGINNER');

-- CreateTable
CREATE TABLE "Courses" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bannerImg" TEXT NOT NULL,
    "level" "Difficulty" NOT NULL DEFAULT 'BEGINNER',
    "tags" TEXT,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Courses_courseId_key" ON "Courses"("courseId");
