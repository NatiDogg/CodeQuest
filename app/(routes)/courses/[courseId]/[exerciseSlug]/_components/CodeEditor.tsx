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

const CodeEditor = ({ exerciseData }: CodeEditorProps) => {
  const filePaths = Object.keys(exerciseData.starterCode || {})
  const isStaticWeb = filePaths.includes('/index.html')

  const entryFile = isStaticWeb
    ? '/index.html'
    : filePaths.includes('/App.jsx')
      ? '/App.jsx'
      : filePaths[0] || '/App.js'

  const sandpackFiles = isStaticWeb
    ? exerciseData.starterCode
    : {
        ...exerciseData.starterCode,
        '/index.js': `import React from "react";
import { createRoot } from "react-dom/client";
import App from ".${entryFile}";

const root = createRoot(document.getElementById("root"));
root.render(<App />);`,
      }

  return (
    <div className="h-full w-full bg-zinc-950">
      <SandpackProvider
        key={exerciseData.exerciseSlug}
        theme="dark"
        template={isStaticWeb ? 'static' : 'react'}
        files={sandpackFiles}
        options={{
          activeFile: entryFile,
          visibleFiles: filePaths.length > 0 ? filePaths : [entryFile],
        }}
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