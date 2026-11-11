-- CreateTable
CREATE TABLE "ExericiseContent" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "chapterId" TEXT NOT NULL,
    "exerciseSlug" TEXT NOT NULL,
    "content" JSONB NOT NULL,

    CONSTRAINT "ExericiseContent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExericiseContent_exerciseSlug_key" ON "ExericiseContent"("exerciseSlug");

-- CreateIndex
CREATE UNIQUE INDEX "ExericiseContent_courseId_chapterId_exerciseSlug_key" ON "ExericiseContent"("courseId", "chapterId", "exerciseSlug");
