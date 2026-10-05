'use client'
import { Courses } from '@/prisma/generated/prisma/client'
import axios from 'axios'
import { useEffect, useState } from 'react'


const CourseList = () => {

     const [courseList, setCourseList] = useState<Courses[]>([])
     const [loading, setLoading] = useState(false)
      const getAllCourses = async()=>{
                 setLoading(true)
                 const courses = await axios.get('/api/course')
                 console.log(courses)
                  setCourseList(courses?.data)
                  setLoading(false)
           }

           useEffect(()=>{
          
        getAllCourses()
     },[])
  return (
    <div>CourseList</div>
  )
}

export default CourseList