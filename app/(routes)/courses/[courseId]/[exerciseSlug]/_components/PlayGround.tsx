'use client'
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { ExericiseContent } from '@/prisma/generated/prisma/client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ContentSection from './ContentSection';

export interface GeneratedExerciseData {
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
       return <div className="p-6 font-game flex flex-col justify-center items-center min-h-screen gap-5 text-slate-400">
           <p>Failed to load exercise content. Please come back later</p>
           <Button size={'lg'}>
              <Link
              href={`/courses`}
              className="px-5 py-2.5 rounded-lg text-slate-6s00 font-medium text-sm transition-colors  font-game"
            >
              Return to Course
            </Link>
           </Button>
        </div>;
    }

    console.log(exerciseData.content)

    
  return (
     <div className='border-t-4 p-2'>
         <SplitterLayout percentage primaryMinSize={40} secondaryInitialSize={50}>
           <div>
              <ContentSection exerciseData={exerciseData} />
           </div>
            <div>
              code Editor
              </div>
      </SplitterLayout>
     </div>
  )
}

export default PlayGround