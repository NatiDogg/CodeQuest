'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import CourseDetailBanner from './_components/CourseDetailBanner'
import axios from 'axios'
import { Courses } from '@/prisma/generated/prisma/client'

const CourseDetailsPage = () => {
    const { courseId } = useParams()
    const [courseDetail, setCourseDetail] = useState<Courses | undefined>(undefined)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchCourseDetails = async () => {
            setLoading(true)
            try {
                const result = await axios.get(`/api/course?courseId=${courseId}`)
                setCourseDetail(result.data.course)
            } catch (error) {
                console.error("Failed to fetch course details:", error)
            } finally {
                setLoading(false)
            }
        }

        if (courseId) {
            fetchCourseDetails()
        }
    }, [courseId])

    return (
        <div>
            <CourseDetailBanner loading={loading} courseDetail={courseDetail} />
        </div>
    )
}

export default CourseDetailsPage