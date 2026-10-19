import React,{createContext} from 'react'

export const UserContext = createContext<any>({
      userDetail: undefined,
      setUserDetail: ()=> {}
})


{/*model UserProgress {
  id           String   @id @default(uuid())
  userId       String
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  courseId     String   // Links to Courses.courseId
  chapterId    String   // Links to CourseChapters.chapterId
  
  // Store the slug or index of the completed exercise from your JSON array
  exerciseSlug String   
  
  xpEarned     Int      @default(0)
  completedAt  DateTime @default(now())

  @@unique([userId, chapterId, exerciseSlug]) // Prevents duplicate completion records
}*/}