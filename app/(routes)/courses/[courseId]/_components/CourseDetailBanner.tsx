import { Courses } from '@/prisma/generated/prisma/client'
import React from 'react'

const CourseDetailBanner = ({ 
  loading, 
  courseDetail 
}: { 
  loading: boolean, 
  courseDetail: Courses | undefined 
}) => {
  if (loading) return <div>Loading banner...</div>
  if (!courseDetail) return <div>No course data available.</div>

  return (
    <div>
      <h1>{courseDetail.title}</h1>
      <p>{courseDetail.description}</p>
    </div>
  )
}

export default CourseDetailBanner