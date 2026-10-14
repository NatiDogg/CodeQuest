import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-sm font-medium text-slate-400">Loading course details...</p>
                </div>
            </div>
  )
}

export default Loading