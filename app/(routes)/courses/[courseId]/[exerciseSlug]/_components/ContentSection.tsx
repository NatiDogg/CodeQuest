'use client'

import React, { useState } from 'react'
import { GeneratedExerciseData } from './PlayGround'
import { Lightbulb, Target, Lock } from 'lucide-react'

type PageProp = {
  exerciseData: GeneratedExerciseData
}

const ContentSection = ({ exerciseData }: PageProp) => {
  const [isHintUnlocked, setIsHintUnlocked] = useState(false)


  const formattedTitle = exerciseData.exerciseSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const hintCost = exerciseData.hintXp || 45

  const handleUnlockHint = () => {
    
    setIsHintUnlocked(true)
  }

  return (
    <div className="h-full overflow-y-auto bg-zinc-950 text-zinc-200 p-6 md:p-10">
      <div className="max-w-3xl space-y-8">
        {/* Header & Lesson Content */}
        <div>
          <span className="inline-block text-xs font-mono uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-md mb-2">
            Exercise
          </span>
          <h2 className="font-game text-3xl md:text-4xl text-white tracking-wide mb-5 pb-4 border-b border-zinc-800/80">
            {formattedTitle}
          </h2>

          <div
            className="text-zinc-300 text-sm md:text-base leading-relaxed space-y-3
              [&_p]:mb-3
              [&_strong]:text-white [&_strong]:font-semibold
              [&_code]:bg-zinc-900 [&_code]:text-sky-300 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:text-xs [&_code]:font-mono [&_code]:border [&_code]:border-zinc-800
              [&_a]:text-sky-400 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-sky-300"
            dangerouslySetInnerHTML={{ __html: exerciseData.content }}
          />
        </div>

        {/* Task Section */}
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-game flex gap-2.5 items-center text-emerald-400">
            <Target className="w-6 h-6 text-emerald-400" />
            Task
          </h2>
          <div
            className="p-5 border border-emerald-500/25 rounded-2xl bg-zinc-900/90 shadow-lg text-zinc-200 text-sm md:text-base leading-relaxed
              [&_code]:bg-black/70 [&_code]:text-emerald-300 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:text-xs [&_code]:font-mono [&_code]:border [&_code]:border-emerald-500/20"
            dangerouslySetInnerHTML={{ __html: exerciseData.task }}
          />
        </div>

        {/* Hint Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-game flex gap-2.5 items-center text-yellow-500">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              Hint
            </h2>
            <span className="text-xs font-mono text-yellow-400/90 bg-yellow-500/10 border border-yellow-500/20 px-2.5 py-1 rounded-full">
              {isHintUnlocked ? `Unlocked (-${hintCost} XP)` : `Costs ${hintCost} XP`}
            </span>
          </div>

          {isHintUnlocked ? (
            <div
              className="p-5 border border-yellow-500/25 rounded-2xl bg-zinc-900/90 shadow-lg text-zinc-200 text-sm md:text-base leading-relaxed
                [&_code]:bg-black/70 [&_code]:text-yellow-300 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:text-xs [&_code]:font-mono [&_code]:border [&_code]:border-yellow-500/20"
              dangerouslySetInnerHTML={{ __html: exerciseData.hint }}
            />
          ) : (
            <div className="p-5 border border-dashed border-yellow-500/30 rounded-2xl bg-zinc-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-zinc-200 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-yellow-500" />
                  Need a nudge to solve this challenge?
                </p>
                <p className="text-xs text-zinc-400">
                  Revealing this hint will deduct{' '}
                  <span className="text-yellow-400 font-mono font-semibold">{hintCost} XP</span>{' '}
                  from your balance.
                </p>
              </div>

              <button
                type="button"
                onClick={handleUnlockHint}
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-yellow-500 hover:bg-yellow-400 active:scale-[0.98] text-zinc-950 font-semibold text-xs sm:text-sm transition-all cursor-pointer shadow-md shadow-yellow-500/10"
              >
               
                Unlock Hint (-{hintCost} XP)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContentSection




