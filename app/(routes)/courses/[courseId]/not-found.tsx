import React from 'react'

const CourseNotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
                <div className="text-center p-6 border rounded-2xl bg-slate-50 max-w-sm">
                    <h2 className="text-lg font-semibold text-slate-800 font-game">Course Not Found</h2>
                    <p className="text-sm font-game text-slate-500 mt-1">We couldn't find the course you were looking for.</p>
                </div>
            </div>
  )
}

export default CourseNotFoundPage