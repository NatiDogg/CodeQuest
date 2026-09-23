'use client'
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const EnrolledCourses = () => {
  const [enrolledCourses, setenrolledCourses] = useState([])

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-2xl md:text-3xl font-bold font-game text-white"> Your Enrolled Courses</h2>
      
      {enrolledCourses.length > 0 ? (
        <div className="w-full">display enrolled courses</div>
      ) : (
        <div className="w-full flex flex-col gap-4 items-center justify-center bg-zinc-800 rounded-2xl p-4">
          <Image src={'/books.png'} alt="books" width={100} height={100} />
          <h2 className="text-white text-2xl font-game">You dont have any course enrolled</h2>
          <Button className={'font-game cursor-pointer'} variant={'pixel'}>Browse All Courses</Button>
        </div>
      )}
    </div>
  )
}

export default EnrolledCourses