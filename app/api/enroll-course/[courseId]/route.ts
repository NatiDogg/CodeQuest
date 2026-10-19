import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req:NextRequest, {params}: {params: Promise<{courseId: string}>})=>{

     try {
         const {courseId} = await params
         const {userId} = await req.json()

         const result = await prisma.enrolledCourses.findFirst({
            where: {courseId: courseId, userId: userId }
         })

         



     } catch (error) {
        console.log(error)
         return NextResponse.json(
                       { success: false, error: 'Failed to get enroll course' },
                       { status: 500 }
                   )
     }

}