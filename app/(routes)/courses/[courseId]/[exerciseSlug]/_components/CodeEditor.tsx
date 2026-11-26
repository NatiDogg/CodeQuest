'use client'

import React from 'react'
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react'
import { Group, Panel, Separator } from 'react-resizable-panels'
import { GeneratedExerciseData } from './PlayGround'

interface CodeEditorProps {
  exerciseData: GeneratedExerciseData
}

const CodeEditor = () => {
  return (
    <div className="h-full w-full bg-zinc-950">
      <SandpackProvider
        theme="dark"
        template="react"
        
        style={{ height: '100%' }}
      >
        <SandpackLayout className="h-full! w-full! rounded-none! border-0! bg-zinc-950!">
          <Group orientation="horizontal" className="h-full w-full">
            {/* Code Editor Pane */}
            <Panel defaultSize="55%" minSize="25%">
              <SandpackCodeEditor
                showLineNumbers
                showTabs
                style={{ height: '100%' }}
              />
            </Panel>

            {/* Draggable Resize Handle */}
            <Separator className="w-1.5 bg-zinc-900 hover:bg-sky-500/60 active:bg-sky-500 transition-colors cursor-col-resize" />

            {/* Live Preview Pane */}
            <Panel defaultSize="45%" minSize="20%">
              <SandpackPreview style={{ height: '100%' }} />
            </Panel>
          </Group>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}

export default CodeEditor