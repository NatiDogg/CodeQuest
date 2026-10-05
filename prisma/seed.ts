import {prisma} from '@/lib/prisma'
import { Difficulty } from './generated/prisma/enums'

const CoursesList = [
  {
    id: '1',
    name: 'React Beginner',
    desc: 'Learn the fundamentals of React, including components, props, state, and building your first UI.',
    bannerImage: 'https://ik.imagekit.io/tubeguruji/Codebox/588a44195922117.66168b374ece8.gif',
    level: Difficulty.BEGINNER,
  },
  {
    id: '2',
    name: 'HTML Beginner',
    desc: 'Understand the basics of web structure using HTML tags, elements, and semantic layouts.',
    bannerImage: 'https://ik.imagekit.io/tubeguruji/Codebox/original-ba977c3d86642765b44fd9d1579d78d4.gif?updatedAt=1763406224974',
    level: Difficulty.BEGINNER,
  },
  {
    id: '3',
    name: 'CSS Beginner',
    desc: 'Master styling essentials like selectors, colors, layout, flexbox, and responsive design.',
    bannerImage: 'https://ik.imagekit.io/tubeguruji/Codebox/fd40a4b8b151c4e432106576187d03c9.gif?updatedAt=1763406225765',
    level: Difficulty.BEGINNER,
  },
  {
    id: ' 4',
    name: 'Python Beginner',
    desc: 'Start coding with Python by learning variables, conditions, loops, functions, and basic projects.',
    bannerImage: 'https://ik.imagekit.io/tubeguruji/Codebox/tumblr_3ebef054c877d03c507aa8c40149908b_515b1f92_1280.webp?updatedAt=1763406230994',
    level: Difficulty.BEGINNER,
  },
];

const main = async()=>{
       console.log('Seeding courses...')

       for(const course of CoursesList){
             await prisma.courses.create({
                 data:{
                      courseId: course.id,
                      title: course.name,
                      description: course.desc,
                      bannerImg: course.bannerImage,
                      level: course.level

                 }

             })
       }
       console.log('Seeding completed successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });