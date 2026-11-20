import React from 'react'
import { GeneratedExerciseData } from './PlayGround'

type PageProps = {
  exerciseData: GeneratedExerciseData
}

const ContentSection = ({ exerciseData }: PageProps) => {
  // Format "build-a-button-component" -> "Build A Button Component"
  const formattedTitle = exerciseData.exerciseSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <div className="h-full overflow-y-auto bg-zinc-950 text-zinc-200 p-6 md:p-8 space-y-6">
      {/* Header Section */}
      <div className="border-b border-zinc-800/80 pb-4">
        <span className="inline-block text-xs font-mono uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-md mb-2">
          Mission Brief
        </span>
        <h2 className="font-game text-2xl md:text-3xl text-white tracking-wide">
          {formattedTitle}
        </h2>
      </div>

      {/* Main Lesson Content */}
      <div
        className="text-zinc-300 text-sm md:text-base leading-relaxed space-y-4 
          [&_p]:mb-3 
          [&_strong]:text-white [&_strong]:font-semibold
          [&_code]:bg-zinc-900 [&_code]:text-sky-300 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono [&_code]:border [&_code]:border-zinc-800
          [&_a]:text-sky-400 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-sky-300"
        dangerouslySetInnerHTML={{ __html: exerciseData.content }}
      />

      {/* Task / Objective Card */}
      {exerciseData.task && (
        <div className="rounded-xl bg-zinc-900/70 border border-emerald-500/30 p-5 shadow-lg space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-game text-lg">
            <span>🎯</span>
            <h3>Your Objective</h3>
          </div>
          <div
            className="text-zinc-200 text-sm leading-relaxed
              [&_code]:bg-black/60 [&_code]:text-emerald-300 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono [&_code]:border [&_code]:border-emerald-500/20"
            dangerouslySetInnerHTML={{ __html: exerciseData.task }}
          />
        </div>
      )}

      {/* Expected Output Box */}
      {exerciseData.output && (
        <div className="rounded-lg bg-black/60 border border-zinc-800 px-4 py-3 text-xs font-mono text-zinc-400 flex items-center justify-between">
          <span className="text-zinc-500 uppercase tracking-wider">Expected Output:</span>
          <span className="text-zinc-200">{exerciseData.output}</span>
        </div>
      )}

      {/* Collapsible Hint Accordion */}
      {exerciseData.hint && (
        <details className="group rounded-xl bg-zinc-900/40 border border-amber-500/25 overflow-hidden">
          <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer select-none text-amber-400 font-medium text-sm hover:bg-zinc-900/70 transition-colors">
            <span className="flex items-center gap-2">
              <span>💡</span>
              <span>Need a Hint?</span>
            </span>
            <span className="text-xs font-mono text-amber-400/80 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
              -{exerciseData.hintXp || 45} XP
            </span>
          </summary>
          <div
            className="px-5 pb-4 pt-2 text-sm text-zinc-300 border-t border-zinc-800/60 leading-relaxed
              [&_code]:bg-black/60 [&_code]:text-amber-300 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono [&_code]:border [&_code]:border-amber-500/20"
            dangerouslySetInnerHTML={{ __html: exerciseData.hint }}
          />
        </details>
      )}
    </div>
  )
}

export default ContentSection




