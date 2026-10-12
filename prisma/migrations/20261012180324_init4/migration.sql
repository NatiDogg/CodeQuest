/*
  Warnings:

  - A unique constraint covering the columns `[chapterId]` on the table `CourseChapters` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chapterId` to the `CourseChapters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CourseChapters" ADD COLUMN     "chapterId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CourseChapters_chapterId_key" ON "CourseChapters"("chapterId");
