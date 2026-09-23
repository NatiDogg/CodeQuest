import Image from "next/image";


import Hero from "./_components/Hero";
export default function Home() {
  /*
    default page of the application
    */
  return (
     <div className="flex flex-col  items-center">
        
         <Hero />
     </div>



  );
}
