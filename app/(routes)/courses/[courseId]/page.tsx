'use client'
import React,{useEffect} from 'react'
import { useParams } from 'next/navigation'
import CourseDetailBanner from './_components/CourseDetailBanner'
import axios from 'axios'
const CourseDetailsPage = () => {
       const {courseId} = useParams()

       useEffect(()=>{
           const fetchCourseDetails = async()=>{
                 const result = await axios.get(`/api/course?courseId=${courseId}`)
                 console.log(result)

           }

           fetchCourseDetails()
       },[courseId])
  return (
      <div>
         <CourseDetailBanner />
      </div>
  )
}

export default CourseDetailsPage