import {prisma}  from '@/lib/prisma'
import { Prisma } from '@/prisma/generated/prisma/client'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async(req:NextRequest)=>{

      try {

          const {courseId, userId} =await req.json()

          const result = await prisma.enrolledCourses.create({
            data:{
                userId: userId,
                courseId: courseId
            }
          })

          return NextResponse.json({success: true, enrolledCourse: result},{status: 201})
        
      } catch (error) {
           if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
               return NextResponse.json(
                   { success: false, error: 'User is already enrolled in this course' },
                   { status: 400 }
               )
           }

           console.error('Database query error:', error)
           return NextResponse.json(
               { success: false, error: 'Failed to enroll course' },
               { status: 500 }
           )
      }
     

}

