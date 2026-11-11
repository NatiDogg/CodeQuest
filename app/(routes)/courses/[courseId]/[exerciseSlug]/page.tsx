
import { notFound } from 'next/navigation';
import PlayGround from './_components/PlayGround';
import { prisma } from '@/lib/prisma'
import { GoogleGenAI } from '@google/genai';

interface PageProps{
   params: Promise<{courseId: string, exerciseSlug: string}>
}
const ExercisePlayGround = async({params}: PageProps) => {

      const {courseId,exerciseSlug} = await params
     //course->courseChapters[array]->exericse[array]->slug

     const course = await prisma.courses.findUnique({where: {courseId},include: {courseChapters: true}})

     if(!course) return notFound()
     let targetChapter = null;
     let targetExercise = null;

     for(const chapter of course.courseChapters){
         const exercises = Array.isArray(chapter.exercises) ? chapter.exercises : []

         const found = exercises.find((exercise: any)=> exercise.slug === exerciseSlug)

         if(found){
           targetChapter = chapter
           targetExercise = found
           break
         }
     }

     if (!targetExercise || !targetChapter) notFound()

      let exerciseContent = await prisma.exericiseContent.findUnique({where: {exerciseSlug}})

      if(!exerciseContent){
        const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_GEMINI_API_KEY})
        const chapterExercises = Array.isArray(targetChapter.exercises) ? targetChapter.exercises : []
        const prompt = `
         You are an expert technical curriculum designer and gamified learning engine.
         Generate detailed content for the following array of exercises belonging to the chapter "${targetChapter.name}":
         ${JSON.stringify(chapterExercises, null, 2)}

         Return the result strictly as a valid JSON array of objects matching this exact schema for each exercise:
         [
           {
             "slug": "exact slug provided",
             "content": "<body style=\"color: #e2e8f0; line-height: 1.6;\"><p>Detailed game-like explanation, minimum 12 lines, valid HTML tags, inline CSS, dark theme, no background, wrapping code terms in <code> tags, links using #38bdf8.</p></body>",
             "task": "<body style=\"color: #e2e8f0;\"><p>Clear task description in HTML body tags.</p></body>",
             "hint": "<body style=\"color: #e2e8f0;\"><p>Helpful hint in HTML body tags.</p></body>",
             "starterCode": {
               "/App.jsx": "Properly indented default starter code."
             },
             "regex": "A valid regex string to validate user code",
             "output": "Expected output description",
             "hintXp": 45
           }
         ]
         Strict Rules: Return ONLY raw JSON array. No markdown backticks.
      `;

      try {
        
         const response = await ai.models.generateContent({
           model: 'gemini-3.8-flash',
           contents: prompt,
           config: {responseMimeType: 'application/json'}
         })

         const generatedList = JSON.parse(response.text || '[]')
      } catch (error) {
        
      }
      }


   
  return (
    <PlayGround />
  )
}

export default ExercisePlayGround



