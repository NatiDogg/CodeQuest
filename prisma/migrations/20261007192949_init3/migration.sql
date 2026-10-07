-- CreateTable
CREATE TABLE "CourseChapters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "exercises" JSONB NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "CourseChapters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CourseChapters" ADD CONSTRAINT "CourseChapters_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("courseId") ON DELETE CASCADE ON UPDATE CASCADE;
