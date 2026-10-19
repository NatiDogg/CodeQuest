-- CreateTable
CREATE TABLE "EnrolledCourses" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "enrolledDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "xpEarned" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "EnrolledCourses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EnrolledCourses_courseId_userId_key" ON "EnrolledCourses"("courseId", "userId");

-- AddForeignKey
ALTER TABLE "EnrolledCourses" ADD CONSTRAINT "EnrolledCourses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("courseId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnrolledCourses" ADD CONSTRAINT "EnrolledCourses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
