import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'

const NavBar = () => {

  
const courses = [
  {
    id: 1,
    name: "HTML",
    desc: "Learn the fundamentals of HTML and build the structure of modern web pages.",
    path: "/course/1/detail",
  },
  {
    id: 2,
    name: "CSS",
    desc: "Master CSS to style and design responsive, visually appealing web layouts.",
    path: "/course/2/detail",
  },
  {
    id: 3,
    name: "React",
    desc: "Build dynamic and interactive web applications using the React JavaScript library.",
    path: "/course/3/detail",
  },
  {
    id: 4,
    name: "React Advanced",
    desc: "Deep dive into advanced React concepts including hooks, state management, performance optimization, and architectural patterns.",
    path: "/course/4/detail",
  },
  {
    id: 5,
    name: "Python",
    desc: "Learn Python programming from basics to intermediate level, covering logic building, functions, and real-world applications.",
    path: "/course/5/detail",
  },
  {
    id: 6,
    name: "Python Advanced",
    desc: "Master advanced Python concepts such as OOP, modules, APIs, data processing, and automation.",
    path: "/course/6/detail",
  },
  {
    id: 7,
    name: "Generative AI",
    desc: "Explore prompt engineering, LLMs, embeddings, image generation, and build GenAI-powered applications.",
    path: "/course/7/detail",
  },
  {
    id: 8,
    name: "Machine Learning",
    desc: "Understand ML concepts, algorithms, data preprocessing, model training, evaluation, and deployment.",
    path: "/course/8/detail",
  },
  {
    id: 9,
    name: "JavaScript",
    desc: "Learn core JavaScript concepts, asynchronous programming, DOM manipulation, and modern ES6+ features.",
    path: "/course/9/detail",
  },
];



  return (
     <NavigationMenu>
  <NavigationMenuList className={'gap-6'}>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
      <NavigationMenuContent>
         <ul  className='grid md:grid-cols-2 gap-2 sm:w-100 md:w-125 lg:w-150 '>
             {courses.map((course,index)=>{
                 return  <div  key={course.id} className='p-2 hover:bg-accent cursor-pointer rounded-xl flex flex-col gap-1'>
                        <h2 className='font-medium'>{course.name}</h2>
                        <p className='text-xs text-gray-500'>{course.desc}</p>
                 </div>


             })}
         </ul>
      </NavigationMenuContent>
      
    </NavigationMenuItem>
    <NavigationMenuItem>
         <Link href="/projects" className={navigationMenuTriggerStyle()}>
    Projects
  </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
         <Link href="/pricing" className={navigationMenuTriggerStyle()} >
    Pricing
  </Link>
    </NavigationMenuItem>
     <NavigationMenuItem>
         <Link href="/contact" className={navigationMenuTriggerStyle()}>
    Contact us
  </Link>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
  )
}

export default NavBar