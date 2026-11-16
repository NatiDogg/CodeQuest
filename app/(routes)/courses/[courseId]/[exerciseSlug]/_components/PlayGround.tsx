'use client'
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { ExericiseContent } from '@/prisma/generated/prisma/client';

interface GeneratedExerciseData {
  exerciseSlug: string;
  content: string;
  task: string;
  hint: string;
  starterCode: Record<string, string>;
  regex: string;
  output: string;
  hintXp: number;
}
interface PageProps {

  content: ExericiseContent | null;
}
const PlayGround = ({content}:PageProps) => {

    const exerciseData = content?.content as GeneratedExerciseData | undefined;

    if(!exerciseData){
       return <div className="p-6 font-game text-slate-400">Failed to load exercise content. Please come back later</div>;
    }

    
  return (
     <div className='border-t-4 p-2'>
         <SplitterLayout percentage primaryMinSize={40} secondaryInitialSize={50}>
           <div>Content</div>
            <div>code Editor</div>
      </SplitterLayout>
     </div>
  )
}

export default PlayGround