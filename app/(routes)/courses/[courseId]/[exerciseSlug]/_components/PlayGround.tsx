'use client'

import { Group, Panel, Separator } from 'react-resizable-panels'
import { ExericiseContent } from '@/prisma/generated/prisma/client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ContentSection from './ContentSection'
import CodeEditor from './CodeEditor'


export interface GeneratedExerciseData {
  exerciseSlug: string
  content: string
  task: string
  hint: string
  starterCode: Record<string, string>
  regex: string
  output: string
  hintXp: number
}

interface PageProps {
  content: ExericiseContent | null
}

const PlayGround = ({ content }: PageProps) => {
  const exerciseData = content?.content as GeneratedExerciseData | undefined

  if (!exerciseData) {
    return (
      <div className="p-6 font-game flex flex-col justify-center items-center min-h-screen gap-5 text-slate-400">
        <p>Failed to load exercise content. Please come back later</p>
        <Button size="lg">
          <Link
            href="/courses"
            className="px-5 py-2.5 rounded-lg font-medium text-sm transition-colors font-game"
          >
            Return to Course
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="h-[calc(100vh-4rem)]  w-full border-t-4 border-zinc-900 bg-black">
      <Group orientation="horizontal">
      
        <Panel defaultSize="45%" minSize="30%">
          <ContentSection exerciseData={exerciseData} />
        </Panel>

        {/* Draggable Resize Handle */}
        <Separator className="w-1.5 bg-zinc-900 hover:bg-sky-500/60 active:bg-sky-500 transition-colors cursor-col-resize" />

        {/* Right Pane: Sandpack Code Editor & Preview */}
        <Panel defaultSize="55%" minSize="35%">
          <CodeEditor />
        </Panel>
      </Group>
    </div>
  )
}

export default PlayGround