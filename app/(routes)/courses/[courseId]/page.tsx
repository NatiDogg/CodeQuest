import React from 'react'

const CourseDetailsPage = async({params}: {params: Promise<{courseId: string}>}) => {
      const {courseId} = await params
  return (
    <div>CourseDetailsPage of {courseId}</div>
  )
}

export default CourseDetailsPage