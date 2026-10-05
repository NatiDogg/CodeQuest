import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma' 

export async function GET() {
  try {
   
    const result = await prisma.courses.findMany()

    return NextResponse.json({ success: true, courses: result }, { status: 200 })
  } catch (error) {
    console.error('Database query error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch courses' },
      { status: 500 }
    )
  }
}