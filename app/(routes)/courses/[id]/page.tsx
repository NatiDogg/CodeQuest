import React from 'react'

const CourseDetailsPage = async({params}:{params: Promise<{id: string}>}) => {
      const {id} = await params
  return (
    <div>CourseDetailsPage of {id}</div>
  )
}

export default CourseDetailsPage