'use client'
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

const PlayGround = () => {
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