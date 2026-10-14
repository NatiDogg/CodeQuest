import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma' 

export async function GET(req:NextRequest) {

    


  try {
   const {searchParams} = new URL(req.url)

    const courseId = searchParams.get('courseId')

    if(courseId){
       const result = await prisma.courses.findUnique({
         where:{courseId},
         include: {courseChapters: true}
       })
       if(!result){
         return NextResponse.json({success: false, message: 'No Course Found'},{status: 400})
       }
        return NextResponse.json({success: true, course: result},{status: 200})
    }
    else{
       const result = await prisma.courses.findMany()

    return NextResponse.json({ success: true, courses: result }, { status: 200 })
    }
  } catch (error) {
    console.error('Database query error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch courses' },
      { status: 500 }
    )
  }
}