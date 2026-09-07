import Image from "next/image";

import Header from "./_components/Header";
import Hero from "./_components/Hero";
export default function Home() {
  /*
    default page of the application
    */
  return (
     <div className="flex flex-col items-center">
         <Header />
         <Hero />
     </div>



  );
}
